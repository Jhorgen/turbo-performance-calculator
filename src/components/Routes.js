import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App'
import IntroPage from './IntroPage'
import '../App.css';




function Routes() {

  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IntroPage} />
      <Route path="/app" component={App} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes;
