import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components';
import './index.css';
import reducers from './reducers';

const storeWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
  	<App />
  </Provider>
  ,document.getElementById('lexicata')
);