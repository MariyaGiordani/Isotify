import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/details';
import ArtistsList from './views/Artists/list';
import AlbumsList from './views/Albums/list';
import NotFound from './views/NotFound';
import Login from './views/Login'
import './index.css';

const routes = () => (
  <Switch>
    <Route path="/index" component={Login} />
    <Route path="/artists/:artistId" component={ArtistDetails} />
    <Route path="/artists" component={ArtistsList} />
    <Route path="/albums" component={AlbumsList} />
    <Redirect exact from="/" to="index" />
    <Route component={NotFound} />
  </Switch>
);

ReactDOM.render((
  <BrowserRouter>
    {routes()}
  </BrowserRouter>
), document.getElementById('root'));
