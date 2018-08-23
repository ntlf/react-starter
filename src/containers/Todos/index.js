import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTodos } from '../../actions/todos';
import styles from './Todos.module.scss';

export class Todos extends Component {
  componentDidMount() {
    const { loadTodos } = this.props;

    loadTodos();
  }

  render() {
    const { todos } = this.props;

    return (
      <div className={styles.Home}>
        <div>Home Component</div>

        <div>
          <ul>
            {todos &&
              todos.data &&
              todos.data.map(todo => <li key={todo.id}>{todo.text}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  loadTodos: PropTypes.func.isRequired,
  todos: PropTypes.shape({
    data: PropTypes.array
  })
};

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = {
  loadTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
