import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { About } from '../components/About';
import { Home } from '../components/Home';
import IniciarSesion from '../pages/IniciarSesion';
import Registrarse from '../pages/Registrarse';

export const AppRouter = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/iniciarSesion">iniciarSesion</Link>
            </li>
            <li>
              <Link to="/registrarse">registrarse</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/iniciarSesion">
            <IniciarSesion />
          </Route>
          <Route path="/registrarse">
            <Registrarse />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

};
