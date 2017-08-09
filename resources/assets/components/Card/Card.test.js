import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Card from './index';


const component = shallow(
  <Card
    className='bordered padded rounded'
    children='Praesent commodo cursus magna, vel scelerisque nisl'
    title='Awesomest Content Ever'
  />,
);

test('it generates a card snapshot', () => {
  const tree = shallowToJson(component);

  expect(tree).toMatchSnapshot();
});

test('it can display a card as an article element', () => {
  expect(component.find('article')).toHaveLength(1);
});
