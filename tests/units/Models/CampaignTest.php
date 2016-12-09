<?php

use App\Repositories\CampaignRepository;

class CampaignTest extends TestCase
{
    /** @test */
    public function can_get_all_campaigns()
    {
        // Setup a mock collection of campaigns!

        $campaign = $this->app->make(CampaignRepository::class);
        $campaigns = $campaign->getAll();

        $this->assertNotCount(0, $campaigns);
    }

    /** @test */
    public function can_get_a_campaign_by_slug()
    {
        // Set up a mock campaign!
        $campaign = app(CampaignRepository::class)->findBySlug('baby-its-cold-inside');

        $this->assertEquals('Baby, It\'s Cold Inside', $campaign->getTitle());
    }
}
