@extends('layouts.master')

@section('content')
    <header role="banner" class="header -hero" style="background-image: url('{{  get_image_url($campaign->coverImage, 'landscape') }}')">
        <div class="wrapper">
            <h1 class="header__title">{{ $campaign->title }}</h1>
            <p class="header__subtitle">{{ $campaign->callToAction }}</p>
        </div>
    </header>


@endsection
