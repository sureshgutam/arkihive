import fontcss from './fonts/font-index.css';
import css from './app.scss';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
);
render(
  <App/>, document.getElementById('app'));
