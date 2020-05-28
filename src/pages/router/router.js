import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from '../App/App';
import City from '../city/index';
import Index from '../index/index';
import Me from '../me/index';
import Order from '../order/index';
import Search from '../search/index';


const router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ App }></Route>
      <Route path="/city/:id" exact component={ City }></Route>
      <Route path="/index/:geohash" exact component={ Index }></Route>
      <Route path="/me" exact component={ Me }></Route>
      <Route path="/search" exact component={ Search }></Route>
      <Route path="/order" exact component={ Order }></Route>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)
export default router;
