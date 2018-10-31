import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/details';
import ArtistsList from './views/Artists/list';
import Albums from './views/Albums/albums';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import NotFound from './views/NotFound';
import Login from './views/Login';
import './index.css';
import './variables.css';

function renderWithLayout(Header, Sidebar, Component) {
  return (
    <Fragment>
      <Header /> <Sidebar /> <Component />
    </Fragment>
  );
}

const routes = () => (
  <Switch>
    <Route
      path="/albums"
      render={() => renderWithLayout(Header, Sidebar, Albums)}
    />
    <Route
      path="/artists/:artistId"
      render={(props) => renderWithLayout(Header, Sidebar, ArtistDetails)}
    />
    <Route
      path="/artists"
      render={() => renderWithLayout(Header, Sidebar, ArtistsList)}
    />
    <Route path="/login" component={Login} />
    <Redirect exact from="/" to="login" />
    <Route component={NotFound} />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById('root')
);
