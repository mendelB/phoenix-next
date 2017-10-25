<?php

namespace App\Repositories;

use Cache;
use App;
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
            $cachedCampaignJson = Cache::get($slug);

            // This turns the JSON into a Contentful Dynamic Entry
            // so we can create a campaign entity out of the cached data
            $revivedContentfulEntry = $this->client->reviveJson($cachedCampaignJson);

            $campaign = new Campaign($revivedContentfulEntry);
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

            if (! App::environment(['local', 'staging'])) {
                $expiresAt = Carbon::now()->addMinutes(15);

                Cache::add($slug, json_encode($campaigns[0]), $expiresAt);
            }

            $campaign = new Campaign($campaigns[0]);
        }

        return $campaign;
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
