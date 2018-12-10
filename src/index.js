import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/detail';
import ArtistsList from './views/Artists/list';
import Albums from './views/Albums/list';
import Songs from './views/Songs/list';
import Playlists from './views/Playlists/list';
import Genres from './views/Genres/list';
import Discover from './views/Discover';
import Settings from './views/Settings/list';
import NotFound from './views/NotFound';
import Login from './views/Login';
import SearchResults from './views/SearchResults';
import { isUserLogged } from './utils/isUserLogged';
import { showMenus } from './utils/showMenus';
import { MusicPlayerProvider } from './components/Player/musicPlayer';

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
      <Route path="/search/:query" component={SearchResults} />
      <Redirect exact from="/" to="login" />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

ReactDOM.render(
  <MusicPlayerProvider accessToken={localStorage.access_token}>
    <BrowserRouter>{routes()}</BrowserRouter>
  </MusicPlayerProvider>,
  document.getElementById('root')
);
