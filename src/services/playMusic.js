export default function playMusic(deviceId, id) {
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
