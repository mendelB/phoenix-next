import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CallToAction from './CallToAction';

const component = shallow(<CallToAction className="sample-class" onClick={() => {}} />)

test('CallToAction snapshot test', () => {
  const tree = shallowToJson(component);

  expect(tree).toMatchSnapshot();
});
