<?php

namespace App\Models;

use Contentful\Delivery\Query;

class Campaign
{
    /**
     * Get all campaigns.
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getCampaigns()
    {
        $client = static::getClient();

        $query = new Query;
        $query->setContentType('campaign');

        $campaigns = collect(iterator_to_array($client->getEntries($query)));

        return $campaigns;
    }

    public static function getCampaign($slug)
    {
        $client = static::getClient();

        $query = new Query;
        $query->setContentType('campaign');
        $query->where('slug', $slug);

        dd($query);

        $campaign = $client->getEntries($query);

        dd($campaign);
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
