import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import ListPost from './pages/Post';
import Login from './pages/Login/indexLogin';
import Home from './pages/Home/indexHome';
import Sobre from './pages/About/indexAbout';
import UserHome from './Auth_User/Home/indexHome';
import CadPost from './Auth_User/Form_Post/indexPostForm';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/posts" component={Main} />
    <Route path="/about" component={Sobre} />
    <Route path="/posts/:id" component={ListPost} />
    <Route path="/:id/home" component={UserHome} />
    <Route path="/:id/post" component={CadPost} />
  </Switch>
);

export default Routes;
