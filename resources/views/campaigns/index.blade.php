@extends('layouts.master')

@section('content')
    <header role="banner" class="header">
        <div class="wrapper">
            <h1 class="header__title">Contentful Prototype</h1>
            <p class="header__subtitle">Here's some campaigns.</p>
        </div>
    </header>

    <div class="container -padded">
        <div class="wrapper">
            <div class="container__block">
                <p>Check out these sample campaigns, powered by Contentful!</p>
            </div>
            <ul class="gallery -quartet">
                @foreach($campaigns as $campaign)
                    <li>
                        <article class="tile">
                            <a class="wrapper" href="{{ url('campaigns/'.$campaign->slug) }}">
                                <div class="tile__meta">
                                    <h1 class="tile__title">{{ $campaign->title }}</h1>
                                    <p class="tile__tagline">{{ $campaign->callToAction }}</p>
                                </div>
                                <img alt="kitten overlords" src="{{ get_image_url($campaign->coverImage, 'square') }}" />
                            </a>
                        </article>
                    </li>
                @endforeach
        </ul>
        </div>
    </div>
@stop
