import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';
import Login from './pages/Login/indexLogin';
import Home from './pages/Home/indexHome';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/posts/:id" component={Post} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
