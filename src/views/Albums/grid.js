import React from 'react';
import Albums from '../../components/albums/albums';
import HeaderLine from '../../components/headerLine/headerLine';
import Switch from '../../components/buttons/switch/switch';
import './albums.css';

const AlbumsGrid = (props) => (
  <div class="albumsView">
    <HeaderLine title="Albums" subtitle={`${props.albumsAmount}, Albums ${props.songsAmount} Songs`}>
      <Switch firstOption="Grid" secondOption="List"/>
    </HeaderLine>
    <Albums style="big" albums={props.albumsList}/>
  </div>
);

export default AlbumsGrid;