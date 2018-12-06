export default function transferPlaybackHere(deviceId) {
  return fetch('https://api.spotify.com/v1/me/player', {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${localStorage.access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      device_ids: [deviceId],
      play: false
    })
  });
}
