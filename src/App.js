import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import Customers from './pages/Customers';
import Business from './pages/Business';
import Developers from './pages/Developers';
import Documentation from './pages/Documentation';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/customers" component={Customers} />
      <Route path="/business" component={Business} />
      <Route path="/developers" component={Developers} />
      <Route path="/docs" component={Documentation} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
