@for($i = 0; $i < data_get($block, 'additionalContent.count', 4); $i++)
    @php($reportback = $reportbacks->pop())
    @if($reportback)
        <div class="block reportback-block">
            <img src="{{ $reportback['media']['uri'] }}">
            <div class="padded">
                <h4>{{ app(\Faker\Generator::class)->firstName }}</h4>
                <p class="footnote">{{ app(\Faker\Generator::class)->numberBetween(5, 100) }} jeans</p>
            </div>
        </div>
    @endif
@endfor
