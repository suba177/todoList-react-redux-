import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './Todo/styleTodo.css';
import App from './App.js';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
