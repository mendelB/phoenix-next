<?php

use App\Models\Campaign;

class CampaignTest extends TestCase
{
    /** @test */
    public function can_get_all_campaigns()
    {
        // Setup a mock collection of campaigns!

        $campaigns = Campaign::getAll();

        $this->assertNotCount(0, $campaigns);
    }

    /** @test */
    public function can_get_a_campaign_by_slug()
    {
        // Set up a mock campaign!

        $campaign = Campaign::findBySlug('baby-its-cold-inside');

        $this->assertEquals('Baby, It\'s Cold Inside', $campaign->getTitle());
    }
}
