import React, { Component } from 'react';
import './discover.css';

import { getNewReleases } from '../../services/newReleases';
import { getMultipleArtistsTopTracks } from '../../services/tracks';
import { albumsList as parseAlbums } from '../../utils/spotifyResponseParsers';
import { parseArtistTopTracks as parseTracks } from '../../utils/spotifyResponseParsers';

import Carousel from '../../components/Carousel/carousel';
import WhatsNew from '../../components/WhatsNew/whatsNew';
import TopSongsAndArtists from '../../components/TopSongsAndArtists/topSongsAndArtists';
import { UserPlaylist } from '../../components/Playlists/userPlaylists';

const getArtistsIds = (artists = []) => artists.map((artist) => artist.id);

const filterTopTracks = (artistsTracks) =>
  artistsTracks.map((artist, index) => artistsTracks[index][0]);

export default class List extends Component {
  state = {
    carouselArtists: [],
    albums: [],
    topTracks: []
  };

  componentDidMount = () => {
    getNewReleases().then((rawAlbums) => {
      const albums = parseAlbums(rawAlbums);
      console.log(rawAlbums);
      const carouselArtists = albums.map(
        ({ artist: { name, id }, imgSrc }) => ({
          name,
          imgSrc,
          id
        })
      );
      const artistsIds = getArtistsIds(carouselArtists);
      getMultipleArtistsTopTracks(artistsIds).then((rawTopTracks) => {
        const topArtistTracks = rawTopTracks.map((artist) =>
          parseTracks(artist)
        );
        const topTracks = filterTopTracks(topArtistTracks);
        console.log(topTracks);
        this.setState({
          carouselArtists,
          albums
        });
      });
    });
  };

  render = () => {
    const { carouselArtists, albums } = this.state;
    return (
      <div className="container">
        <Carousel items={carouselArtists} />
        <div className="discover">
          <WhatsNew albums={albums.slice(0, 4)} />
          <div className="discover__top">
            <TopSongsAndArtists
              artists={carouselArtists.slice(0, 4)}
              songs={[]}
            />
          </div>
          <div className="discover__divider" />
        </div>
        <UserPlaylist />
      </div>
    );
  };
}
