import "./index.css";

import Primeiro from "./components/basicos/Primeiro.js";

import React from 'react';
import ReactDOM from 'react-dom';

const helloworld = <strong>Hello World <br></br></strong>

ReactDOM.render(
  <div>
    {helloworld}
    <Primeiro />
  </div>,
  document.getElementById('root')
);

