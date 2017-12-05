import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import 'normalize.css/normalize.css';
import './style/style.css';
import App from './components/app';
// import reducers from './reducers';
import reducer from './store/configureStore';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware)));
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
);
