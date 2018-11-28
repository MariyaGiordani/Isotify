import { spotifyInstance, createHeader } from './axiosInstances';
import { request } from 'https';
import { promises } from 'fs';

export function getResultsSearch(query) {
  return spotifyInstance
    .get(`/search?q=${query}&type=artist,track,album,playlist`, createHeader())
    .then((response) =>
    Promise.All(
        response.artists.items.map((artist) => getArtist(artist.id))
    ).then((artists) => //ARRAY
        Promise.All(getTopArtistsWithAlbums(artists.map(artist => artist.items.slice(0,4))))
    ))
}

1º promises.all: 
[
    {data: [a,b,n,xc,as,fas,dsd]},
    {data: [a,b,n,xc,as,fas,dsd]},
    {data: [a,b,n,xc,as,fas,dsd]},
    {data: [a,b,n,xc,as,fas,dsd]},
    {data: [a,b,n,xc,as,fas,dsd]},
    {data: [a,b,n,xc,as,fas,dsd]}
]

search(batatinha)

artists : [] => pegar os artistas
os 4 primeiros vai fazer uma outra request
retornar 
playlists : [] // nao sei
tracks : [] // nao rpecisa fazer nada
albums : [] // nao precisa fazer nada