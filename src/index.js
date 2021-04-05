import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Navigator from './navigation';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Navigator/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

