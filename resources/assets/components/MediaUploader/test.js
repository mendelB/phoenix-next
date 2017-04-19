import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import MediaUploader from './index';

test('MediaUploader snapshot test', () => {
  const component = shallow(<MediaUploader />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
