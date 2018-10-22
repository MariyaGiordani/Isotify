import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/details';
import ArtistsList from './views/Artists/list';
import AlbumsGrid from './views/Albums/grid';
import NotFound from './views/NotFound';
import Login from './views/Login';
import './index.css';
import './variables.css';

const routes = () => (
  <Switch>
    <Route path="/albums" component={AlbumsGrid} />
    <Route path="/artists" component={ArtistsList} />
    <Route path="/artists/:artistId" component={ArtistDetails} />
    <Route path="/login" component={Login} />
    <Redirect exact from="/" to="login" />
    <Route component={NotFound} />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById('root')
);
