import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <Route component={Dashboard} path="/dashboard" />
    </BrowserRouter>
  );
};

export default Routes;
