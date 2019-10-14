import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

it('render Loading', () => {
  expect(renderer.create(<Loading />).toJSON()).toMatchSnapshot();
});
