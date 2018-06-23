import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import PageTransition from './Transitions/PageTransition';
import Intro from './Form/Intro';
import GetQuote from './Form/GetQuote';
import Results from './Results/Results';
import Loading from './Results/Loading';

const PageTransitionWithRouter = withRouter(props => <PageTransition {... props} />);

const Routes = () => (
  <Router>
    <TransitionGroup>
      <PageTransitionWithRouter>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/get-quote" component={GetQuote} />
          <Route path="/results/loading" component={Loading} />
          <Route path="/results" component={Results} />
          <Route default path component={Intro} />
        </Switch>
      </PageTransitionWithRouter>
    </TransitionGroup>
  </Router>
);

export default Routes;
