import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import  {reducer}  from './reducers/index';
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { VehicleSearch } from "./components/App";
import MakeSelect from "./components/MakeSelect";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route component={MakeSelect} exact path="/" />
      <Route
        render={props => (
          <VehicleSearch
            make={props.location.state.make}
          />
        )}
        path="/search"
      />
    </Switch>
  </BrowserRouter>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
