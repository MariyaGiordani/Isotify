import React from "react";
import { Link } from "react-router-dom";
import BannerArtist from "../../components/BannerArtist/bannerArtist";
import SideBar from "../../components/Sidebar/sidebar";

const ArtistDetails = (props) => (
  <div>
    <SideBar />
    <div className="container">
      <BannerArtist />
      <h1>Artist {props.match.params.artistId}</h1>
      <Link to="/artists">Back to Artists</Link>
    </div>
  </div>
);

export default ArtistDetails;
