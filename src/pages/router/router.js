import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from '../App/App';
import City from '../city/index';
import Index from '../index/index';


const router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ App }></Route>
      <Route path="/city/:id" exact component={ City }></Route>
      <Route path="/index" exact component={ Index }></Route>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)
export default router;
