import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducer, composeWithDevTools(
  applyMiddleware()
));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
