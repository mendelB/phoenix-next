<?php

class CampaignTest extends TestCase
{
    /** @test */
    public function can_check_if_campaign_is_active()
    {
        $campaign = $this->getCampaign();

        $this->assertNotNull($campaign->isActive());
        $this->assertEquals('boolean', gettype($campaign->isActive()));
    }
}
