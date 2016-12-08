@extends('layouts.master')

@section('content')
    <h1>Campaigns</h1>
    <ul>
        @foreach($campaigns as $campaign)
            <li>
                <h2><a href="{{ url('campaigns/'.$campaign->getSlug()) }}">{{ $campaign->getTitle() }}<a/></h2>
                <p>{{ $campaign->getCallToAction() }}</p>
            </li>
        @endforeach
    </ul>
@stop
