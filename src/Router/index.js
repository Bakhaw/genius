import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../screens/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
