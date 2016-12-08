<?php

use Contentful\Delivery\ImageOptions;

/**
 * App helper functions.
 */

/**
 * Get image URL for a specified asset by the crop type.
 *
 * @param  \Contentful\Deliver\Asset $asset
 * @param  string $crop
 * @return string
 */
function get_image_url($asset, $crop = 'landscape')
{
    $options = [];

    $options['landscape'] = (new ImageOptions)
        ->setFormat('jpg')
        ->setWidth(1440)
        ->setHeight(620)
        ->setResizeFit('fill');

    $options['square'] = (new ImageOptions)
        ->setFormat('jpg')
        ->setWidth(800)
        ->setHeight(800)
        ->setResizeFit('fill');

    if (! array_key_exists($crop, $options)) {
        throw new \InvalidArgumentException('The specified cover image type of '.$crop.' is not available.');
    }

    return $asset->getFile()->getUrl($options[$crop]);
}
