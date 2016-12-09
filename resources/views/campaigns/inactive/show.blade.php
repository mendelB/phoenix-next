@extends('layouts.master')

@section('content')
    <em>This campaign is inactive!</em>
    <h1>{{ $campaign->getTitle() }}</h1>
    <h2>{{ $campaign->getCallToAction() }}</h2>

    <p>{{ $campaign->getProblemFact()->getContent() }}</p>
    <p><i>{{ $campaign->getProblemFact()->getSource() }}</i></p>

    <p>{{ $campaign->getSolutionFact() }}</p>

    <img alt="{{ $campaign->getCoverImage()->getTitle() }}" src="{{ get_image_url($campaign->getCoverImage(), 'landscape') }}">
@endsection
