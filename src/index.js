import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import  {reducer}  from './reducers/index';
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<Routes />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
