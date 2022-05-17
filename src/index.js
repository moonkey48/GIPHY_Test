import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Giphy from './service/giphy';

const giphy = new Giphy();

ReactDOM.render(
  <React.StrictMode>
    <App giphy={giphy} />
  </React.StrictMode>,
  document.getElementById('root')
);
