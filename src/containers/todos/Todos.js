/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, loadTodos } from '../../actions/todos';
import styles from './Todos.module.scss';

export class Todos extends Component {
  state = { value: '' };

  componentDidMount() {
    const { loadTodos } = this.props;

    loadTodos();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { addTodo } = this.props;
    const { value } = this.state;

    addTodo({
      id: Math.random()
        .toString(36)
        .substring(2, 8),
      text: value
    });

    this.setState({ value: '' });

    event.preventDefault();
  };

  render() {
    const { todos } = this.props;
    const { value } = this.state;

    if (todos.error) {
      return <div>{todos.error}</div>;
    }

    return (
      <div className={styles.Home}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={value} onChange={this.handleChange} />
          <button>Send</button>
        </form>

        {todos.isFetching && <div>Loading...</div>}
        {todos.data &&
          !todos.isFetching && (
            <div>
              <ul>
                {todos.data.map(todo => (
                  <li key={todo.id}>{todo.text}</li>
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
}

Todos.propTypes = {
  loadTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.shape({
    data: PropTypes.array
  })
};

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = {
  loadTodos,
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
