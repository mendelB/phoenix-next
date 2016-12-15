<?php

namespace App\Repositories;

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

        return collect(iterator_to_array($campaigns));
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
        $query = (new Query)
            ->setContentType('campaign')
            ->where('fields.slug', $slug)
            ->setLimit(1);

        $campaigns = $this->makeRequest($query);

        if (! $campaigns->count()) {
            throw new ModelNotFoundException;
        }

        $campaign = $campaigns[0];
        $campaign->setLocale(app()->getLocale());

        return new Campaign($campaign);
    }

    /**
     * Make a request to Contentful's Delivery API.
     *
     * @param $query
     * @return \Contentful\ResourceArray
     */
    public function makeRequest($query) {
        $campaigns = $this->client->getEntries($query);

        return $campaigns;
    }
}
