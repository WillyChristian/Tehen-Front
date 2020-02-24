import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/posts/:id" component={Post} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
