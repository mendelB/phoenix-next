<?php

class HelpersTest extends TestCase
{
    /** @test */
    public function can_get_a_campaign_cover_image_url()
    {
        // @TODO: Use a mock!
        $asset = app('contentful.delivery')->getAsset('13XDOJIsxuSegEMUuqmwWc');

        $url = get_image_url($asset, 'landscape');

        $this->assertEquals('//images.contentful.com/2nh7n4rfkw4q/13XDOJIsxuSegEMUuqmwWc/4ce66876aeaa784d62454a29bc776cf9/sample-cover-image-01.jpg?w=1440&h=620&fm=jpg&fit=fill', $url);
    }
}
