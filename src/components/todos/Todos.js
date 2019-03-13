import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodos } from '../../actions/todos';
import Content from '../common/Content';

export const Todos = ({ todos, loadTodos }) => {
  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <Content>
      <div>Todos</div>

      {!todos.data.length && <div>Loading...</div>}

      {!!todos.data.length && (
        <div>
          <ul>
            {todos.data.map(todo => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </div>
      )}
    </Content>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = {
  loadTodos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
