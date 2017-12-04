import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'normalize.css/normalize.css';
import './style/style.css';
import App from './components/app';
// import reducers from './reducers';
import reducer from './store/configureStore';

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
