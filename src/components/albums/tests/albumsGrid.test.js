import React from 'react';
import { shallow } from 'enzyme';
import AlbumsGrid from '../albumsGrid/albumsGrid';

describe('<AlbumsGrid />', () => {

  const albumsMock = () => ([
    { id: 123120, name: 'Album 0' },
    { id: 123121, name: 'Album 1' },
    { id: 123122, name: 'Album 2' },
    { id: 123123, name: 'Album 3' },
    { id: 123124, name: 'Album 4' },
    { id: 123125, name: 'Album 5' },
    { id: 123126, name: 'Album 6' }
  ]);

  it('should render without throwing an error', () => {
    const wrapper = shallow(<AlbumsGrid />);
    expect(wrapper.is('.albums-grid')).toBe(true);
  });

  it('should render the correct number of Albums', () => {
    const props = {
      albums: albumsMock(),
      size: 'big',
      gridSize: 'quarter'
    }

    const wrapper = shallow(<AlbumsGrid { ...props }/>);

    expect(wrapper.find('Album').length).toBe(props.albums.length);
  });
  
  it('should render the correct number of Albums', () => {
    const props = {
      albums: albumsMock()
    }

    const wrapper = shallow(<AlbumsGrid { ...props }/>);
    const albums = wrapper.find('Album');

    expect(albums.length).toBe(props.albums.length);
  });
  
  it('should render child Albums with proper props', () => {
    const albums = albumsMock();
    const props = {
      albums,
      size: 'big',
      gridSize: 'quarter'
    }

    const wrapper = shallow(<AlbumsGrid { ...props }/>);
    const albumsList = wrapper.find('Album');

    albumsList.forEach((album, index) => {
      expect(album.prop('key')).toBe(props.id);
      expect(album.prop('id')).toBe(albums[index].id);
      expect(album.prop('name')).toBe(albums[index].name);
      expect(album.prop('size')).toBe(props.size);
    })

  });

});