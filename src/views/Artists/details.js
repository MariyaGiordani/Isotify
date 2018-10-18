import React from "react";
import { Link } from "react-router-dom";
import BannerArtist from "../../components/BannerArtist/bannerArtist";

const ArtistDetails = (props) => (
  <div>
    <BannerArtist />
    <h1>Artist {props.match.params.artistId}</h1>
    <Link to="/artists">Back to Artists</Link>
  </div>
);

export default ArtistDetails;
