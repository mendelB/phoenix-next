import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CallToAction from './CallToAction';

// Mock Redux containers so we don't need Provider context.
jest.mock('./CallToActionContainer', () => 'CallToActionContainer');

const component = shallow(
  <CallToAction
    campaignId="12345"
    legacyCampaignId="67890"
    tagline="Aenean eu leo quam. Pellentesque ornare sem vestibulum."
    useCampaignTagline={true}
    visualStyle="light"
  />,
);

test('CallToAction snapshot test', () => {
  const tree = shallowToJson(component);

  expect(tree).toMatchSnapshot();
});
