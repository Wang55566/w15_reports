import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import configureStore from './store';
import {loadReports} from './store/reportReducer';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.loadReports = loadReports;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
