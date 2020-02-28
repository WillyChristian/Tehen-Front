import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/admin/login" exact component={Login} />
      <Route path="/posts/:id" component={Post} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
