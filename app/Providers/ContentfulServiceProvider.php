<?php

namespace App\Providers;

use App\Services\Contentful\ContentfulDelivery;
use Illuminate\Support\ServiceProvider;

class ContentfulServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('contentful_delivery', function ($app) {
            return new ContentfulDelivery();
        });
    }
}
