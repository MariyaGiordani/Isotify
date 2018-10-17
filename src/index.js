import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ArtistDetails from './views/Artists/details';
import ArtistsList from './views/Artists/list';
import AlbumsList from './views/Albums/list';
import NotFound from './views/NotFound';
import SideBar from "./components/Sidebar/sidebar"
import './index.css';

const routes = () => (
    <div>
      <SideBar />
      <div className="container">
        <Switch>
          <Route path="/artists/:artistId" component={ArtistDetails} />
          <Route path="/artists" component={ArtistsList} />
          <Route path="/albums" component={AlbumsList} />
          <Redirect exact from="/" to="albums" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
);

ReactDOM.render((
  <BrowserRouter>
    {routes()}
  </BrowserRouter>
), document.getElementById('root'));
