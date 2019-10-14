import React from 'react';
import renderer from 'react-test-renderer';
import data from '../dataForTests';
import TableUsers from './TableUsers';

it('render TableUsers', () => {
  expect(renderer.create(<TableUsers data={data} />).toJSON()).toMatchSnapshot();
});
