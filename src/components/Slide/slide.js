import React from 'react';
import { Link } from 'react-router-dom';

import ButtonListenTo from '../ButtonListenTo/buttonListenTo';
import { PlayerContext } from '../../components/Player/musicPlayer';

import './slide.css';

const Slide = (props) => {
  const { imgSrc, name, topSongs, id } = props;
  const songsIds = topSongs.map((song) => song.id);
  return (
    <PlayerContext>
      {(context) => (
        <div className="slide">
          <img className="slide__image" alt="Artist" src={imgSrc} />
          <div className="slide__wrap">
            <Link to={`/artists/${id}`}>{name}</Link>

            <ButtonListenTo
              {...{ playerCallback: () => context.onClickPlayTrack(songsIds) }}
            />
          </div>
        </div>
      )}
    </PlayerContext>
  );
};

export default Slide;
