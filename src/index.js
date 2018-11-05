import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/details';
import ArtistsList from './views/Artists/list';
import Albums from './views/Albums/albums';
import NotFound from './views/NotFound';
import Login from './views/Login';
import { isUserLogged } from './utils/isUserLogged';
import { showSidebar } from './utils/showSidebarHeader';

import './index.css';
import './variables.css';

const routes = () => (
  <Fragment>
    {showSidebar()}
    <Switch>
      <Route path="/login" component={Login} />
      {!isUserLogged() && (
        <Redirect
          to="/login"
          render={(props) => <Login {...props} isUserLogged={isUserLogged} />}
        />
      )}
      <Route path="/artists/:artistId" component={ArtistDetails} />
      <Route path="/albums" component={Albums} />
      <Route path="/artists" component={ArtistsList} />
      <Redirect exact from="/" to="login" />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById('root')
);
