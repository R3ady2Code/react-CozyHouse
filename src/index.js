import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import 'pure-react-carousel/dist/react-carousel.es.css';
import 'animate.css/animate.min.css';

import './scss/index.scss';
import './scss/styles.scss';
import './scss/home.scss';
import './scss/pets.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
