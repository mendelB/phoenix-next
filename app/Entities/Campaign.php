<?php

namespace App\Entities;

use Contentful\Delivery\Asset;
use Contentful\Delivery\DynamicEntry;

/**
 * The Campaign entity.
 *
 * @property  string $title
 * @property  string $slug
 * @property  string $callToAction
 * @property  string $active
 * @property  string $coverImage
 * @property  string $problemFact
 * @property  string $solutionFact
 * @property  string $solutionStatement
 * @property  string $facts
 * @property  string $faqs
 */
class Campaign
{
    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $id;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $title;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $slug;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $callToAction;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $coverImage;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $problemFact;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $solutionFact;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $solutionStatement;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $facts;

    /**
     * The Contentful id of the campaign.
     *
     * @var string
     */
    protected $faqs;

    /**
     * The state of the campaign.
     *
     * @var bool
     */
    private $active;

    /**
     * Create instance of the Campaign class.
     *
     * @param \Contentful\Delivery\DynamicEntry $entity
     */
    public function __construct(DynamicEntry $entity)
    {
        foreach(array_keys(get_object_vars($this)) as $property) {
            $this->set($property, $entity->{'get'.ucwords($property)}());
        }
    }

    /**
     * Dynamically access the campaign's attributes.
     *
     * @param  string $property
     * @return mixed
     */
    public function __get($property)
    {
        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }

    /**
     * Dynamically set the campaign's attributes.
     *
     * @param  string $property
     * @param  mixed $data
     * @return void
     */
    public function set($property, $data)
    {
        return $this->$property = $this->getByDataType($data);
    }

    /**
     * Return the state of the campaign.
     *
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * Get data accounting for the typeof data supplied.
     *
     * @param  mixed $data
     * @return mixed
     */
    private function getByDataType($data)
    {
        if (is_array($data)) {
            return $this->getArrayData($data);
        }

        if ($data instanceof DynamicEntry) {
            return $this->getDynamicEntryData($data);
        }

        return $data;
    }

    /**
     * Get array of string data from supplied array of mixed data types.
     *
     * @param  array $array
     * @return array
     */
    private function getArrayData($array)
    {
        return array_map([$this, 'getByDataType'], $array);
    }

    /**
     * Get data from DynamicEntry data type.
     *
     * @param  \Contentful\Delivery\DynamicEntry $entry
     * @return array
     */
    private function getDynamicEntryData(DynamicEntry $entry)
    {
        $output = [];

        $fields = $this->getDynamicEntryFields($entry);

        foreach ($fields as $field) {
            $output[$field] = $entry->{'get'.ucwords($field)}();
        }

        return $output;
    }

    /**
     * Get all fields associated with a DynamicEntry data type.
     *
     * @param  \Contentful\Delivery\DynamicEntry $entry
     * @return array
     */
    private function getDynamicEntryFields(DynamicEntry $entry)
    {
        return array_keys($entry->getContentType()->getFields());
    }
}
