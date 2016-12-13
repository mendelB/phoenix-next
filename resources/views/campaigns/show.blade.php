@extends('layouts.master')

@section('content')
    <h1>{{ $campaign->title }}</h1>
    <h2>{{ $campaign->callToAction }}</h2>

    @if ($campaign->coverImage)
        <img alt="{{ $campaign->coverImage->getTitle() }}" src="{{ get_image_url($campaign->coverImage, 'landscape') }}">
    @endif

    @if ($campaign->problemFact)
        <dl>
            <dt>{{ $campaign->problemFact['content'] }}</dt>
            <dd><i>{{ $campaign->problemFact['source'] }}</i></dd>
        </dl>
    @endif

    @if ($campaign->solutionFact)
        <dl>
            <dt>{{ $campaign->solutionFact['content'] }}</dt>
            <dd><i>{{ $campaign->solutionFact['source'] }}</i></dd>
        </dl>
    @endif

    @if ($campaign->solutionStatement)
        <p>{{ $campaign->solutionStatement }}</p>
    @endif

    @if ($campaign->facts)
        @foreach ($campaign->facts as $fact)
            <dl>
                <dt>{{ $fact['content'] }}</dt>
                <dd>{{ $fact['source'] }}</dd>
            </dl>
        @endforeach
    @endif

    @if ($campaign->faqs)
        <div>{{ $campaign->faqs }}</div>
    @endif
@endsection
