import React from 'react';
import ReactDOM from 'react-dom/client';
// JS
import App from './App.js';
// CSS
import './reset.css';
import './Todo/styleTodo.css';
// REDUX
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './todo-redux/todoReducer.js';

// ROOT Redux
const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer);
// ROOT React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
