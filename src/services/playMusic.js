function playMusic(deviceId, id, type) {
  return fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        context_uri: `spotify:${type}:${id}`
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.access_token}`
      }
    }
  );
}

function playTracks(deviceId, ids) {
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

export { playMusic, playTracks };
