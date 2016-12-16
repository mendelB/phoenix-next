<?php

namespace App\Entities;

use Contentful\Delivery\Asset;

/**
 * The Campaign entity.
 *
 * @property string $title
 * @property string $callToAction
 * @property Asset $coverImage
 * @property array $problemFact
 * @property array $solutionFact
 * @property array $solutionStatement
 * @property array $facts
 * @property string $faqs
 */
class Campaign extends Entity
{
    /**
     * Return the state of the campaign.
     *
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }
}
