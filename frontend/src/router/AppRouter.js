import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../components/Home';
import Country from '../pages/Country';

export const AppRouter = () => {

  return (
    <Router>
      <div>
        {/* <nav>
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
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/countries/:uuid">
            <Country />
          </Route>
          <Route path="/countries">
            <Home />
          </Route>
          <Redirect
            to={{ pathname: '/countries' }} />
        </Switch>
      </div>
    </Router>
  );

};
