import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './client/redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  composeWithDevTools()
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);