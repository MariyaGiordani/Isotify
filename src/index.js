import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import ArtistDetails from "./views/Artists/details";
import ArtistsList from "./views/Artists/list";
import AlbumsList from "./views/Albums/list";
import AlbumsGrid from "./views/Albums/grid";
import NotFound from "./views/NotFound";
import "./index.css";
import "./variables.css";

const routes = () => (
  <Switch>
    <Route path="/albums" component={AlbumsGrid} />
    <Route path="/albums/grid" component={AlbumsGrid} />
    <Route path="/albums/list" component={AlbumsList} />
    <Route path="/artists" component={ArtistsList} />
    <Route path="/artists/:artistId" component={ArtistDetails} />
    <Redirect exact from="/" to="artists" />
    <Route component={NotFound} />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById("root")
);
