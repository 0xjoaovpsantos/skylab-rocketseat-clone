import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import GoStack from './pages/GoStack';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <Route component={Dashboard} path="/dashboard" exact />
      <Route component={GoStack} path="/dashboard/gostack-11" />
    </BrowserRouter>
  );
};

export default Routes;
