import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={SignUp} path="/signup" />
    </BrowserRouter>
  );
};

export default Routes;
