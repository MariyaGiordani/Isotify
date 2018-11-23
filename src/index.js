import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/detail';
import ArtistsList from './views/Artists/list';
import Albums from './views/Albums/list';
import Songs from './views/Songs/list';
import Playlists from './views/Playlists/list';
import Genres from './views/Genres/list';
import Discover from './views/Discover/index';
import Settings from './views/Settings/list';
import NotFound from './views/NotFound';
import Login from './views/Login';
import { isUserLogged } from './utils/isUserLogged';
import { showMenus } from './utils/showMenus';

import './index.css';
import './variables-modifiers.css';
import './variables-gradients.css';
import './variables-colors.css';

const routes = () => (
  <Fragment>
    {isUserLogged() && showMenus()}
    <Switch>
      <Route path="/login" component={Login} />
      {!isUserLogged() && <Redirect to="/login" />}
      <Route path="/artists/:artistId" component={ArtistDetails} />
      <Route path="/albums" component={Albums} />
      <Route path="/artists" component={ArtistsList} />
      <Route path="/artists/related/:artistsIds" component={ArtistsList} />
      <Route path="/songs" component={Songs} />
      <Route path="/playlists" component={Playlists} />
      <Route path="/genres" component={Genres} />
      <Route path="/discover" component={Discover} />
      <Route path="/settings" component={Settings} />
      <Redirect exact from="/" to="login" />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

ReactDOM.render(<BrowserRouter>{routes()}</BrowserRouter>, document.getElementById('root'));
