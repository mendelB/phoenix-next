import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CampaignUpdate from './index';

const author = {
  fields: {
    avatar: 'http://example.com/avatar-aang.jpg',
    jobTitle: 'The Last Airbender',
    name: 'Aang'
  }
};

const component = shallow(
  <CampaignUpdate
    id="1234567890"
    author={author}
    content='Donec id elit non mi porta gravida at eget metus.'
  />,
);

test('it generates a campaign update snapshot', () => {
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});

test('it can display a campaign update', () => {
  expect(component.find('Card')).toHaveLength(1);
});
