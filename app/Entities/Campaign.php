<?php

namespace App\Entities;

use Contentful\Delivery\Asset;
use Contentful\Delivery\DynamicEntry;

/**
 * The Campaign entity.
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
     * The title of the campaign.
     *
     * @var string
     */
    protected $title;

    /**
     * The slug for the campaign.
     *
     * @var string
     */
    protected $slug;

    /**
     * The call to action field for the campaign.
     *
     * @var string|null
     */
    protected $callToAction;

    /**
     * The cover image field for the campaign.
     *
     * @var \Contentful\Delivery\Asset|null
     */
    protected $coverImage;

    /**
     * The problem fact field for the campaign.
     *
     * @var array|null
     */
    protected $problemFact;

    /**
     * The solution fact field for the campaign.
     *
     * @var array|null
     */
    protected $solutionFact;

    /**
     * The solution statement field for the campaign.
     *
     * @var string|null
     */
    protected $solutionStatement;

    /**
     * The facts field for the campaign.
     *
     * @var array|null
     */
    protected $facts;

    /**
     * The faqs field for the campaign.
     *
     * @var string
     */
    protected $faqs;

    /**
     * Indicates whether the campaign is active or not.
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

    /**
     * Dynamically set the campaign's attributes.
     *
     * @param  string $property
     * @param  mixed $data
     * @return void
     */
    private function set($property, $data)
    {
        return $this->$property = $this->getByDataType($data);
    }

}
