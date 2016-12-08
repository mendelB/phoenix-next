<?php

use Contentful\Delivery\ImageOptions;

/**
 * App helper functions.
 */

/**
 * Get cover image URL for a specified asset by the crop type.
 *
 * @param  \Contentful\Deliver\Asset $asset
 * @param  string $crop
 * @return string
 */
function get_cover_image_url($asset, $crop = 'large')
{
    $validCrops = ['large', 'square'];

    if (!in_array($crop, $validCrops, true)) {
        throw new \InvalidArgumentException('The specified cover image type of '.$crop.' is not available.');
    }

    $options = [];

    $options['large'] = (new ImageOptions)
        ->setFormat('jpg')
        ->setWidth(1440)
        ->setHeight(620)
        ->setResizeFit('fill');

    $options['square'] = (new ImageOptions)
        ->setFormat('jpg')
        ->setWidth(800)
        ->setHeight(800)
        ->setResizeFit('fill');

    return $asset->getFile()->getUrl($options[$crop]);
}
