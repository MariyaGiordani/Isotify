import React from 'react';

import Card from './card';
import { PlayerContext } from '../Player/musicPlayer';

export default ({
  imagePlaylist: imgSrc,
  size,
  namePlaylist: title,
  followersPlaylist,
  id
}) => (
  <PlayerContext>
    {(context) => (
      <Card
        {...{
          imgSrc,
          size,
          title,
          id,
          subtitle: `${followersPlaylist} followers`,
          key: id,
          hasHover: true,
          hoverCallback: (id) => context.onClickPlayPlaylist(id)
        }}
      />
    )}
  </PlayerContext>
);
