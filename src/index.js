import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={configureStore()}>
<Routes />
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
