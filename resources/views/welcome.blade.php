@extends('layouts.takeover')

@section('content')
    <div class="chrome -noise">
        <div class="wrapper">
            <a class="construction__logo" href="http://dosomething.org"></a>
            <section class="container -framed construction">
                <div class="wrapper">
                    <div class="container__block -centered">
                        <h2 class="heading -alpha">Under Construction</h2>
                        <h3>We're rebuilding the site!</h3>
                    </div>
                    <div class="container__block -centered">
                        <p>We're hard at work making a new and improved experience for you and the entire DoSomething.org community.</p>
                        <p>Enter your email below, and we'll let you know when we launch!</p>
                        <form action="waitinglist" method="post">
                            <ul class="form-actions -inline">
                               <li><input name="email" type="text" class="text-field" placeholder="you@gmail.com"></li>
                               <li><input type="submit" class="button" value="Submit"></li>
                               <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            </ul>
                            @if (count($errors) > 0)
                                <div class="validation-error">
                                    @foreach ($errors->all() as $error)
                                        <p>{{ $error }}</p>
                                    @endforeach
                                </div>
                            @endif
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
@stop
