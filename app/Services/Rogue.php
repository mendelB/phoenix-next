<?php

namespace App\Services;

use DoSomething\Gateway\Common\RestApiClient;

class Rogue extends RestApiClient
{
    /**
     * Mintues to retain data in cache.
     *
     * @var \DateTime|float|int
     */
    private $cacheExpiration = 30;

    /**
     * Rogue constructor.
     */
    public function __construct()
    {
        $base_url = config('services.rogue.url');

        parent::__construct($base_url . '/api/');
    }

    /**
     * Store a new campaign signup in Rogue
     * @see: https://github.com/DoSomething/rogue/blob/master/documentation/endpoints/signups.md#signups
     *
     * @param string $user_id - Northstar ID of user
     * @param string $campaign_id - NID of campaign on the Drupal site
     * @param string $source - Sign up source (e.g. web, iPhone, etc.)
     * @param string $details - Details to be added to the signup
     *
     * @return string - Signup ID
     */
    public function storeSignup($userId, $legacyCampaignId, $legacyCampaignRunId, $source, $details = null)
    {
        $response = $this->post('v2/signups', [
            'northstar_id' => $userId,
            'campaign_id' => $legacyCampaignId,
            'campaign_run_id' => $legacyCampaignRunId,
            'source' => $source,
            'details' => $details,
        ]);

        return $response;
    }

    /**
     * Send a raw API request, without attempting to handle error responses.
     *
     * @param $method
     * @param $path
     * @param array $options
     * @param bool $withAuthorization
     * @return \GuzzleHttp\Psr7\Response
     */
    public function raw($method, $path, $options, $withAuthorization = true)
    {
        $options['headers'] = $this->defaultHeaders;

        if ($withAuthorization) {
            $options['headers']['X-DS-Rogue-API-Key'] = config('services.rogue.key');
        }

        return parent::raw($method, $path, $options, $withAuthorization);
    }
}
