import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer} from './redux_reducers';
import thunk from 'redux-thunk'

import 'antd/dist/antd.css'
import { HashRouter } from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
          <App/>
      </HashRouter>
  </Provider>, 
  document.getElementById('root'))