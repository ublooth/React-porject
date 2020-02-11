import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from '../App/App';
import City from '../city/index';


const router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ App }></Route>
      <Route path="/city" exact component={ City }></Route>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)
export default router;
