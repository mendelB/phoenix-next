@extends('layouts.master')

@section('content')
    <div class="container -padded">
        <div class="wrapper">
            <div class="container__block">
                <h1>Campaigns</h1>
                <p>Here's all the campaigns available on <strong>Phoenix Next</strong>, the new DoSomething.org
                web experience.</p>
            </div>
            <ul class="gallery -quartet">
                @foreach($campaigns as $link)
                    <li>
                        <article class="tile">
                            <a class="wrapper" href="{{ url('campaigns/'.$link->slug) }}">
                                <div class="tile__meta">
                                    <h1 class="tile__title">{{ $link->title }}</h1>
                                    <p class="tile__tagline">{{ $link->callToAction }}</p>
                                </div>
                                <img alt="kitten overlords" src="{{ get_image_url($link->coverImage, 'square') }}" />
                            </a>
                        </article>
                    </li>
                @endforeach
        </ul>
        </div>
    </div>
@stop
