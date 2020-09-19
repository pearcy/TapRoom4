import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
// import reducer from './reducers/keg-list-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();