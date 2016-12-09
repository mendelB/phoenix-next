<?php

use App\Repositories\CampaignRepository;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class ViewCampaignsTest extends TestCase
{
    // Probably want some sort of mock or fake for these test,
    // since we ideally shouldn't be connecting to Contentful
    // to grab content for running tests.

    /** @test */
    public function user_can_view_a_list_of_campaigns()
    {
        $this->visit('/campaigns');

        $this->see('Campaigns');
    }

    /** @test */
    public function user_can_view_a_campaign()
    {
        $this->visit('/campaigns/baby-its-cold-inside');

        $this->see('Baby, It\'s Cold Inside');
    }
}
