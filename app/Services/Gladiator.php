<?php

namespace App\Services;

use DoSomething\Gateway\Common\RestApiClient;

class Gladiator extends RestApiClient
{
    /**
     * Gladiator constructor.
     */
    public function __construct()
    {
        $base_url = config('services.gladiator.url').'/api/';

        $overrides = [
            'defaults' => [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                    'X-DS-Gladiator-API-Key' => config('services.gladiator.key'),
                ],
            ],
        ];

        parent::__construct($base_url, $overrides);
    }

    /**
     * Get an index of (optionally filtered) users from Gladiator.
     *
     * @param  array  $query
     * @return array - JSON response
     */
    public function getAllUsers(array $query = [])
    {
        $path = 'v1/users';

        if (isset($query['current_user'])) {
            $useCurrentUser = filter_var($query['current_user'], FILTER_VALIDATE_BOOLEAN);

            if ($useCurrentUser && auth()->id()) {
                $query['user'] = auth()->id();
            }

            unset($query['current_user']);
        }

        return $this->get($path, $query);
    }

    /**
     * Store a new user in contest specified by campaign id and campaign run id.
     *
     * @param  string $userId
     * @param  string $legacyCampaignId
     * @param  string $legacyCampaignRunId
     * @return array - JSON response
     */
    public function storeUserInContest(string $userId, $legacyCampaignId, $legacyCampaignRunId)
    {
        return $this->post('v1/users', [
            'id' => $userId,
            'term' => 'id',
            'campaign_id' => $legacyCampaignId,
            'campaign_run_id' => $legacyCampaignRunId,
        ]);
    }
}
