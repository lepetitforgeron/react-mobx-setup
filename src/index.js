import React from 'react';
import ReactDOM from 'react-dom';

const title = 'my personal setup for react apps with mobx';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
