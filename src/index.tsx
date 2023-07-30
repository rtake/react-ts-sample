import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Parent from './components/ContainerSample'
import Counter from './components/Counter'

ReactDOM.render(
  <React.StrictMode>
    <Counter initialValue={1}/>
  </React.StrictMode>,
  document.getElementById('root')
);