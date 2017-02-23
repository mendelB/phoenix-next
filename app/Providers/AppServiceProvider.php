<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Contentful\Delivery\Client as DeliveryClient;
use Composer\Console\Application as Composer;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->alias(DeliveryClient::class, 'contentful.delivery');
    }
}
