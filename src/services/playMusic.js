function playAlbum(deviceId, id) {
  return fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        context_uri: `spotify:album:${id}`
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.access_token}`
      }
    }
  );
}

function playMusic(deviceId, ids) {
  const uris = ids.map((id) => `spotify:track:${id}`);
  return fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        uris
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.access_token}`
      }
    }
  );
}

function playArtist(deviceId, id) {
  return fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        context_uri: `spotify:artist:${id}`
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.access_token}`
      }
    }
  );
}

function playPlaylist(deviceId, id) {
  return fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        context_uri: `spotify:playlist:${id}`
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.access_token}`
      }
    }
  );
}

export { playMusic, playAlbum, playArtist, playPlaylist };
