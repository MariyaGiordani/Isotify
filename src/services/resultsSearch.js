import { spotifyInstance, createHeader } from './axiosInstances';
import { request } from 'https';

export function getResultsSearch(query) {
  return spotifyInstance
    .get(`/search?q=${query}&type=artist,track,album,playlist`, createHeader())
    .then((response) =>
    Promise.All(
        response.artists.items.map((artist) => getArtist(artist.id))
    ).then(response)
        Promise.All(getTopArtistsWithAlbums(response.artists.items.slice(0,4))));
}


search(batatinha)

artists : [] => pegar os artistas
os 4 primeiros vai fazer uma outra request
retornar 
playlists : [] // nao sei
tracks : [] // nao rpecisa fazer nada
albums : [] // nao precisa fazer nada