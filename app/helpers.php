<?php

use Contentful\Delivery\Asset;
use Contentful\Delivery\ImageOptions;
use Illuminate\Support\HtmlString;

/**
 * App helper functions.
 */

/**
 * Get an item from the cache, or store the default value.
 *
 * @param  string  $key
 * @param  \DateTime|float|int  $minutes
 * @param  \Closure  $callback
 * @return mixed
 */
function remember($key, $minutes, Closure $callback)
{
    return app('cache')->remember($key, $minutes, $callback);
}

/**
 * Format a string of Markdown into HTML.
 *
 * @param $source
 * @return string
 */
function markdown($source)
{
    $parsedown = Parsedown::instance();
    $markup = $parsedown->setMarkupEscaped(true)->text($source);

    return new HtmlString($markup);
}

/**
 * Get image URL for a specified asset by the crop type.
 *
 * @param Asset $asset
 * @param  string $crop
 * @return string
 */
function get_image_url(Asset $asset, $crop = 'landscape')
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

    $locale = app()->getLocale();

    return $asset->getFile($locale)->getUrl($options[$crop]);
}
