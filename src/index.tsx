import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Clock } from './components/Clock'
import { ImageUploader } from './components/ImageUploader'

ReactDOM.render(
  <ImageUploader />,
  document.getElementById('root')
);