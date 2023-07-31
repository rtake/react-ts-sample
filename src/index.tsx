import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Clock } from './components/Clock'
import { ImageUploader } from './components/ImageUploader'
import { Parent } from './components/ImperativeHandleSample'

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);