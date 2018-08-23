import React from 'react';
import { shallow } from 'enzyme/build';
import renderer from 'react-test-renderer';
import NotFound from './index';

it('renders without crashing', () => {
  shallow(<NotFound />);
});

it('renders correctly', () => {
  const component = renderer.create(<NotFound />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
