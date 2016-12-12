<?php

namespace App\Repositories;

use App\Entities\Campaign;
use Contentful\Delivery\Query;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CampaignRepository
{
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
     * @return \Contentful\Delivery\DynamicEntry
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

    public function makeRequest($query) {
        $client = $this->getClient();

        $campaigns = $client->getEntries($query);

        return $campaigns;
    }

    /**
     * Get instance of the Contentful delivery client.
     *
     * @return \Contentful\Delivery\Client
     */
    public function getClient()
    {
        return app('contentful.delivery');
    }
}
