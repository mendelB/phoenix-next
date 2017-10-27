<?php

namespace App\Repositories;

use Cache;
use Carbon\Carbon;
use App\Entities\Campaign;
use Contentful\Delivery\Query;
use Contentful\Delivery\Client as Contentful;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CampaignRepository
{
    /**
     * CampaignRepository constructor.
     *
     * @param Contentful $contentful
     */
    public function __construct(Contentful $contentful)
    {
        $this->client = $contentful;
    }

    /**
     * Get all campaigns.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getAll()
    {
        $query = (new Query)->setContentType('campaign');

        $campaigns = $this->makeRequest($query);
        $array = iterator_to_array($campaigns);

        return collect($array)->map(function ($entity) {
            return new Campaign($entity);
        });
    }

    /**
     * Find a campaign by its slug.
     *
     * @param  string $slug
     * @return \App\Entities\Campaign
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findBySlug($slug)
    {
        if (Cache::has($slug)) {
            $flattenedCampaign = Cache::get($slug);
        } else {
            $query = (new Query)
            ->setContentType('campaign')
            ->where('fields.slug', $slug)
            ->setInclude(3)
            ->setLimit(1);

            $campaigns = $this->makeRequest($query);

            if (! $campaigns->count()) {
                throw new ModelNotFoundException;
            }

            $campaignEntry = $campaigns[0];

            $campaign = new Campaign($campaignEntry);

            $flattenedCampaign = json_decode(json_encode($campaign));

            if (config('services.contentful.cache')) {
                $expiresAt = Carbon::now()->addMinutes(15);

                Cache::add($slug, $flattenedCampaign, $expiresAt);
            }
        }

        return $flattenedCampaign;
    }

    /**
     * Make a request to Contentful's Delivery API.
     *
     * @param $query
     * @return \Contentful\ResourceArray
     */
    public function makeRequest($query)
    {
        $campaigns = $this->client->getEntries($query);

        return $campaigns;
    }
}
