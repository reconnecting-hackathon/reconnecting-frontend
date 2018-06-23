import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import AllConnections from './AllConnections';
import Form from './Form/Form/index';
import NextSteps from './NextSteps';
import Connection from './Connection';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/all-connections" component={AllConnections} />
      <Route exact path="/add-new" component={Form} />
      <Route exact path="/next-steps" component={NextSteps} />
      <Route exact path="/connection" component={Connection} />
    </Switch>
  </Router>
);

export default Routes;
