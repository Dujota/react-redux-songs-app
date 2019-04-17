import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Components
import App from './components/App';

// Reducers
import reducers from './reducers';

// First import Provide, createStore and reducers, then wrap the App component in the Provider and pass in the store={createStore(reducers)}  prop
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
