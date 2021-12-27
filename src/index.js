import "./index.css"

import React from 'react';
import ReactDOM from 'react-dom';

const helloworld = <strong>Hello World</strong>

ReactDOM.render(
  <div>
    {helloworld}
  </div>,
  document.getElementById('root')
);

