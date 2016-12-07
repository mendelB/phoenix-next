<?php

namespace App\Models;

use Contentful\Delivery\Query;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Campaign
{
    /**
     * Get all campaigns.
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getAll()
    {
        $client = static::getClient();

        $query = (new Query)->setContentType('campaign');

        return collect(iterator_to_array($client->getEntries($query)));
    }

    /**
     * Find a campaign by its slug.
     *
     * @param  string $slug
     * @return \Contentful\Delivery\Client
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public static function findBySlug($slug)
    {
        $client = static::getClient();

        $query = (new Query)
            ->setContentType('campaign')
            ->where('fields.slug', $slug)
            ->setLimit(1);

        $campaign = $client->getEntries($query);

        if (! $campaign->count()) {
            throw new ModelNotFoundException;
        }

        return $campaign->offsetGet(0);
    }

    /**
     * Get instance of the contentful delivery client.
     *
     * @return \Contentful\Delivery\Client
     */
    public static function getClient()
    {
        return app('contentful.delivery');
    }
}
