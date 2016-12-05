<?php

namespace App\Services\Contentful;

use Contentful\Delivery\Client;

class ContentfulDelivery extends Client
{
    /**
     * ContentfulDeliver client constructor.
     */
    public function __construct()
    {
        $token = config('services.contentful.cdn.delivery_key');
        $spaceId = config('services.contentful.cdn.space_id');
        $preview = false;

        parent::__construct($token, $spaceId, $preview);
    }
}
