import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/details';
import ArtistsList from './views/Artists/list';
import AlbumsList from './views/Albums/list';
import AlbumsGrid from './views/Albums/grid';
import NotFound from './views/NotFound';
import './index.css';

const routes = () => (
  <Switch>
    <Route path="/artists/:artistId" component={ArtistDetails} />
    <Route path="/artists" component={ArtistsList} />
    <Route path="/albums/list" component={AlbumsList} />
    <Route path="/albums/grid" component={AlbumsGrid} />
    <Route path="/albums" component={AlbumsGrid} />
    <Redirect exact from="/" to="artists" />
    <Route component={NotFound} />
  </Switch>
);

ReactDOM.render((
  <BrowserRouter>
    {routes()}
  </BrowserRouter>
), document.getElementById('root'));
