import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';
import Login from './pages/Login/indexLogin';
import Home from './pages/Home/indexHome';
import Sobre from './pages/About/indexAbout';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/posts" component={Main} />
    <Route path="/about" component={Sobre} />
    <Route path="/posts/:id" component={Post} />
  </Switch>
);

export default Routes;
