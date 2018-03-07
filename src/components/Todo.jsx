import React from 'react';
import { shape, number, string, bool } from 'prop-types';
import { observer } from 'mobx-react';

@observer
class Todo extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <li>
        <input
          type='checkbox'
          checked={todo.finished}
          onClick={() => (todo.finished = !todo.finished)}
        />
        {todo.title}
      </li>
    );
  }
}

Todo.propTypes = {
  todo: shape({
    id: number.isRequired,
    title: string.isRequired,
    finished: bool.isRequired
  }).isRequired
};

export default Todo;
