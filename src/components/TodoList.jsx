import React from 'react';
import { shape, number, string, bool } from 'prop-types';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Todo from './Todo';

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = '';

  @action
  handleInputChange = (e) => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = (e) => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type='text'
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type='submit'>Add</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </div>
    );
  }
}

TodoList.propTypes = {
  store: shape({
    todos: shape({
      id: number,
      title: string,
      finished: bool
    }),
    unfinishedTodoCount: number.isRequired
  }).isRequired
};

export default TodoList;
