import React from 'react';
import { mount } from 'enzyme';
import { Home } from './index';

function setup() {
  return {
    loadTodos: jest.fn()
  };
}

it('renders without crashing', () => {
  const props = setup();

  mount(<Home {...props} />);
});
