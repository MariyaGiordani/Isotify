import React from 'react';
import './slide.css';
import ButtonListenTo from '../ButtonListenTo/buttonListenTo';
import { PlayerContext } from '../../components/Player/musicPlayer';

const Slide = (props) => {
  const { imgSrc, name, topSongs } = props;
  const songsIds = topSongs.map((song) => song.id);
  return (
    <PlayerContext>
      {(context) => (
        <div className="slide">
          <img className="slide__image" alt="Artist" src={imgSrc} />
          <div className="slide__wrap">
            {name}
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
