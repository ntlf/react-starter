import React from 'react';
import { mount } from 'enzyme';
import { Todos } from './Todos';

function setup() {
  return {
    loadTodos: jest.fn(),
    todos: {
      data: [],
    },
  };
}

it('renders without crashing', () => {
  const props = setup();

  mount(<Todos {...props} />);
});
