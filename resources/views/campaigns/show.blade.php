@extends('layouts.master')

@section('content')
    <header role="banner" class="header -hero" style="background-image: url('{{  get_image_url($campaign->coverImage, 'landscape') }}')">
        <div class="wrapper">
            <h1 class="header__title">{{ $campaign->title }}</h1>
            <p class="header__subtitle">{{ $campaign->callToAction }}</p>
        </div>
    </header>

    <div class="container -padded">
        <div class="wrapper">
            @if ($campaign->problemFact)
                <div class="container__block">
                    <h3>The Problem</h3>
                    <p>{{ $campaign->problemFact['content'] }}<sup>1</sup></p>

                    <div class="footnote">
                        <h4 class="js-footnote-toggle">Sources</h4>
                        <ul class="js-footnote-hidden">
                            <li><sup>1</sup> {{ $campaign->problemFact['source'] }}</li>
                        </ul>
                    </div>
                </div>
            @endif

            @if ($campaign->solutionFact || $campaign->solutionStatement)
                <div class="container__block">
                    <h3>The Solution</h3>
                    @if ($campaign->solutionFact)
                        <dl>
                            <dt>{{ $campaign->solutionFact['content'] }}</dt>
                            <dd><i>{{ $campaign->solutionFact['source'] }}</i></dd>
                        </dl>
                    @endif

                    @if ($campaign->solutionStatement)
                        <p>{{ $campaign->solutionStatement }}</p>
                    @endif
                </div>
            @endif


            @if ($campaign->facts)
                <div class="container__block">
                    <h3>Facts</h3>
                    <ul class="list -compacted">
                        @foreach ($campaign->facts as $fact)
                            <li>{{ $fact['content'] }} <sup>{{ $loop->iteration }}</sup></li>
                        @endforeach
                    </ul>
                    <br>

                    <div class="footnote">
                        <h4 class="js-footnote-toggle">Sources</h4>
                        <ul class="js-footnote-hidden">
                            @foreach ($campaign->facts as $fact)
                                <li><sup>{{ $loop->iteration }}</sup> {{ $fact['source'] }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif

            @if ($campaign->faqs)
                <div class="container__block">
                    <h3>FAQs</h3>
                    <div>{{ markdown($campaign->faqs) }}</div>
                </div>
            @endif
        </div>
    </div>

@endsection
