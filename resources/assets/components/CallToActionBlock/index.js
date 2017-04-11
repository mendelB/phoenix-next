import React from 'react';
import classnames from 'classnames';
import { contentfulImageUrl } from '../../helpers';
import { mergeMetadata } from '../../helpers/analytics';
import './cta.scss';

const renderImpactContent = (content) => {
  if (content.impactNumber) {
    return (
      <div className="cta__block cta__impact">
        {content.impactPrefix ? <span className="cta__impact-prefix">{content.impactPrefix}</span> : null}
        {content.impactNumber ? <span className="cta__impact-number">{content.impactNumber}</span> : null}
        {content.impactMessage ? <span className="cta__impact-message">{content.impactMessage}</span> : null}
      </div>
    );
  }

  return null;
};

const CallToActionBlock = ({ isAffiliated, fields, imageUrl, legacyCampaignId, clickedSignUp }) => {
  const { title, content, additionalContent } = fields;
  const hasPhoto = additionalContent ? additionalContent.hasPhoto : false;

  // @TODO: This should probably be editable in contentful...
  const buttonText = isAffiliated ? 'Reportback' : 'Get Involved';

  const backgroundImageStyle = {
    backgroundImage: `url(${contentfulImageUrl(imageUrl, '400', '400', 'fill')})`,
  };

  const metadata = mergeMetadata(CallToActionBlock.defaultMetadata, {
    hasPhoto: hasPhoto,
    hasImpact: additionalContent !== 'undefined',
    hasContent: typeof content !== 'undefined',
  });

  const handleOnClickButton = () => clickedSignUp(legacyCampaignId, metadata);

  return (
    <div className={classnames('cta', {'has-photo': hasPhoto})}>
      <div className="cta__content">
        { !content ? <div className="cta__block"><p className="cta__title">{title}</p></div> : null }

        { additionalContent ? renderImpactContent(additionalContent) : null}

        { content ? <div className="cta__block"><p className="cta__message">{content}</p></div> : null }

        <div className="cta__block">
          <a className="button" onClick={handleOnClickButton}>{buttonText}</a>
        </div>
      </div>

      { hasPhoto ? <div className="cta__photo" style={backgroundImageStyle}></div> : null }
    </div>
  );
};

CallToActionBlock.defaultMetadata = {
  source: 'call to action block',
}

export default CallToActionBlock;


