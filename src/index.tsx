import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Clock } from './components/Clock'
import { Parent } from './components/Parents'

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);