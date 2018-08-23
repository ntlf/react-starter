import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodos } from '../../actions/todos';
import styles from './Home.module.scss';

export class Home extends Component {
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

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = {
  loadTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
