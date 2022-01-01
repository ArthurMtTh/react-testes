import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from "./components/basicos/Primeiro.js";
import Segundo from "./components/basicos/Segundo";

const helloworld = <strong>Hello World <br></br></strong>

ReactDOM.render(
  <div id="app">
    {helloworld}
    <Primeiro />

    <Segundo
    registro = {9703}
    nome = "Adam Kallister"
    idade = {28}/>
  </div>,
  document.getElementById('root')
);

