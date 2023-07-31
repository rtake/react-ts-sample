import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Clock } from './components/Clock'
import { ImageUploader } from './components/ImageUploader'
import { Parent } from './components/ImperativeHandleSample'
import { Input } from './components/Input'

ReactDOM.render(
  <Input />,
  document.getElementById('root')
);