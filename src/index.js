/* global document */
import React from 'react';
import { render } from 'react-dom';
/* eslint-disable import/no-extraneous-dependencies */
import DevTools from 'mobx-react-devtools';
/* eslint-enable import/no-extraneous-dependencies */

import TodoList from './components/TodoList';
import TodoListModel from './models/TodoListModel';

const store = new TodoListModel();

render(
  /* eslint-disable react/jsx-filename-extension */
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>,
  /* eslint-enable react/jsx-filename-extension */
  document.getElementById('app')
);

store.addTodo('setup react with mobx');
store.addTodo('get funky');
store.todos[0].finished = true;

module.hot.accept();
