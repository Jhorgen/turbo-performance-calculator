import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ConnectedApp } from "./App";
import IntroPage from "./IntroPage";
import MakeSelect from "./MakeSelect";
import Vehicle from "./Vehicle";
import "../App.css";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={IntroPage} exact path="/" />
          <Route component={MakeSelect} path="/makes" />
          <Route
            render={props => (
              <ConnectedApp
                make={props.location.state.make}
                model={props.location.state.model}
                year={props.location.state.year}
                trim={props.location.state.trim}
              />
            )}
            path="/vehicles"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
