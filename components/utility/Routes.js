import React from 'react';
import { Switch, Route } from 'react-router-native';
import { Text } from 'react-native';

import LoginFormContainer from '../../containers/auth/LoginFormContainer';
import RegisterFormContainer from '../../containers/auth/RegisterFormContainer';

const Home = () => (
  <Text>Home</Text>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/register" component={RegisterFormContainer} />
    {/* <Route component={NoMatch} /> */}
  </Switch>
);

export default Routes;
