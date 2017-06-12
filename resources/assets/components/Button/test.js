import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Button snapshot test', () => {
  const tree = renderer.create(
    <Button callback={() => {}} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Decked out Button test', () => {
  const tree = renderer.create(
    <Button classNames="-modifier" callback={() => {}} callbackArgument="1234" callbackMetadata={{ source: 'jest test' }} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
