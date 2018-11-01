import React, { Component } from 'react';
import ArtistsList from '../../components/artists/ArtistsList/ArtistsList';
import ArtistsGrid from '../../components/artists/ArtistsGrid/ArtistsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';
import { getTopArtistsWithAlbums } from '../../services/artists';
import { topArtistsWithAlbums as parseTopArtists } from '../../utils/spotifyReponseParsers';
import './Artists.css';

import { runInThisContext } from 'vm';

export default class ArtistsListView extends Component {
  state = {
    isListSelected: false,
    artists: [],
    artistsAmount: 0,
    songsAmount: 0
  };

  componentDidMount() {
    // getTopArtists()
    //   .then((response) => {
    //     return Promise.all(
    //       parseTopArtists(response.data).map(artist => getAlbumsFromArtist(artist.id).then(albuns => ({ ...artist, albuns}) ))
    //     )

    getTopArtistsWithAlbums().then((artists) => {
      let parsedArtists = parseTopArtists(artists);
      parsedArtists = parsedArtists.filter(
        (artist) => artist.albums.length > 0
      );

      this.setState({ artists: parsedArtists });
      this.setState({ artistsAmount: parsedArtists.length });
    }); /*.then((oi) => console.log(oi));

    /* const artistList = parseTopArtists(response.data);
        const artistIds = artistList.map((artist) => artist.id);
        console.log(artistIds);
        getAlbumsFromArtists(artistIds)
          .then(([promises]) => Promise.all(promises)) //promises.forEach(promise => promise.then())//Promise.all(promises))
          .then(function(results) {
            let matchedArray = [];

            matchedArray = artistList.map((value, index) => {
              value.albums = results[index].data.items;
              return value;
            });

            /*for (let i = 0; i < 20; i++) {
              artistList[i].albums = results[i].data.items;
              matchedArray.push(artistList[i]);
  }*/ /*
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        //window.alert('Sorry, we cannot complete your request right now.');
        console.log(error);
      });*/
  }

  changeViewMode = (isListSelected) => this.setState({ isListSelected });

  render = () => {
    const { artists, isListSelected, artistsAmount, songsAmount } = this.state;
    const subtitle = `${artistsAmount} Artists, ${songsAmount} Songs`;

    return (
      <React.Fragment>
        <div className="container artists-view">
          <HeaderLine
            {...{
              title: 'Artists',
              subtitle
            }}
          >
            <SwitchButton
              firstOption="Grid"
              secondOption="List"
              inputFunction={this.changeViewMode}
            />
          </HeaderLine>

          {isListSelected ? (
            <ArtistsList artists={artists} />
          ) : (
            <ArtistsGrid artists={artists} />
          )}
        </div>
      </React.Fragment>
    );
  };
}
