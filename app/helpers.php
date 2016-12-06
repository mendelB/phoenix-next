<?php

use Contentful\Delivery\Client as DeliveryClient;

/**
 * Return a registered Contentful client from the Laravel service container.
 *
 * @return mixed
 */
function contentfulClient($client = 'delivery')
{
    if ($client === 'delivery') {
        return app(DeliveryClient::class);
    }

    throw new InvalidArgumentException('There isn\'t a Contentful client registered with that name.');
}
