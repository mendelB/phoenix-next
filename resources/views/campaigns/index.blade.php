@extends('layouts.master')

@section('content')
    <h1>Campaigns</h1>
    <ul>
        @foreach($campaigns as $campaign)
            <li>
                <p>{{ $campaign->getTitle() }}</p>
                <p>{{ $campaign->getCallToAction() }}</p>
                <p>{{ $campaign->getStatus() }}</p>
                <p>{{ $campaign->getSlug() }}</p>
            </li>
        @endforeach
    </ul>
@stop
