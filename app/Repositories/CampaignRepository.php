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
     * @return stdClass
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findBySlug($slug)
    {
        $flattenedCampaign = remember('campaign_'.$slug, 15, function () use($slug) {
            $query = (new Query)
                ->setContentType('campaign')
                ->where('fields.slug', $slug)
                ->setInclude(3)
                ->setLimit(1);

            $campaigns = $this->makeRequest($query);

            if (! $campaigns->count()) {
                return 'not_found';
            } else {
                $campaign = new Campaign($campaigns[0]);

                return json_encode($campaign);
            }
        });

        if ($flattenedCampaign == 'not_found') {
            throw new ModelNotFoundException;
        }

        return json_decode($flattenedCampaign);
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
