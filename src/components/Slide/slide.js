import React from 'react';
import { Link } from 'react-router-dom';

import ButtonListenTo from '../ButtonListenTo/buttonListenTo';
import { PlayerContext } from '../../components/Player/musicPlayer';

import './slide.css';

const Slide = (props) => {
  const { imgSrc, name, id } = props;
  return (
    <PlayerContext>
      {(context) => (
        <div className="slide">
          <img className="slide__image" alt="Artist" src={imgSrc} />
          <div className="slide__wrap">
            <Link to={`/artists/${id}`}>{name}</Link>

            <ButtonListenTo
              {...{ playerCallback: () => context.onClickPlayArtist(id) }}
            />
          </div>
        </div>
      )}
    </PlayerContext>
  );
};

export default Slide;
