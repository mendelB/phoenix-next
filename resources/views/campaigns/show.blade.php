@extends('layouts.master')

@section('content')
    <h1>{{ $campaign->getTitle() }}</h1>
    <h2>{{ $campaign->getCallToAction() }}</h2>

    <p>{{ $campaign->getProblemFact()->getContent() }}</p>
    <p><i>{{ $campaign->getProblemFact()->getSource() }}</i></p>

    <p>{{ $campaign->getSolutionFact() }}</p>

    <img src="{{ get_cover_image_url($campaign->getCoverImage(), 'large') }}">
@endsection
