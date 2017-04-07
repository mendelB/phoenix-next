import React from 'react';
import Markdown from '../Markdown';
import { contentfulImageUrl } from '../../helpers';

import './lede-banner.scss';

const LedeBanner = ({title, subtitle, blurb, coverImage}) => {
  // console.log(props);

  const backgroundImageStyle = {
    backgroundImage: `url(${contentfulImageUrl(coverImage.url, '800', '600', 'fill')})`,
  };

  return (
    <header role="banner" className="lede-banner">
      <div className="lede-banner__image" style={backgroundImageStyle}></div>
      <div className="lede-banner__content">
        <div className="wrapper">
          <h1 className="lede-banner__title">{title}</h1>
          <h2 className="lede-banner__subtitle">{subtitle}</h2>
        </div>

        <Markdown className="lede-banner__blurb">{blurb}</Markdown>

        {/* <button className="button">Join us</button> */}
      </div>
    </header>
  )
};

export default LedeBanner;

// <ContentfulImage url={coverImage.url} width={'800'} height={'600'} description={coverImage.description} />

// <header class="lede-banner">
//     <div class="wrapper">
//         <h1>{{ $campaign->title }}</h1>
//         <h2>{{ $campaign->callToAction }}</h2>

//         <div></div>

//         @if (count($campaign->affiliateSponsors))
//             <div>
//                 <span>powered by</span>
//                 @foreach ($campaign->affiliateSponsors as $sponsor)
//                     <img src="{{ get_image_url($sponsor->logo, 'logo') }}" />
//                 @endforeach
//             </div>
//         @endif

//         <div id="banner-signup"></div>
//     </div>
//     <div class="cover-image" style="background-image: url('{{ get_image_url($campaign->coverImage, 'square') }}')"></div>
// </header>
