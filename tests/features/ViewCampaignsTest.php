<?php

use App\Models\Campaign;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class ViewCampaignsTest extends TestCase
{
    /** @test */
    public function user_can_view_a_list_of_campaigns()
    {
        // Probably want some sort of mock or fake here, since we ideally
        // aren't always connecting to Contentful to grab content for
        // running tests.

        $this->visit('/campaigns');

        $this->see('Campaigns');
    }
}
