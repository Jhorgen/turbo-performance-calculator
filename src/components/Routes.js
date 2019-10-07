import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {ConnectedApp} from './App'
import IntroPage from './IntroPage'
import MakeSelect from './MakeSelect';
import '../App.css';

function Routes() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route component={IntroPage} exact path="/" />
      <Route component={MakeSelect} path="/makes" />
      <Route render={(props) => <ConnectedApp make={props.location.state.make}/>} path="/vehicles" />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes;
