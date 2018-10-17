import React from 'react';
import { Link } from 'react-router-dom';
import Albums from '../../components/albums/albums';
import HeaderLine from '../../components/headerLine/headerLine';
import Switch from '../../components/buttons/switch/switch';

/* just for testing for the moment */
const albumsList = [
  {
    key: "1",
    title: "test1 title",
    author:"test1 author",
    imgSrc:"https://exquisiteemmalisa.files.wordpress.com/2015/10/classic-lady.jpg"
  },
  
  {
    key: "2",
    title: "test2 title",
    author:"test2 author",
    imgSrc:"https://exquisiteemmalisa.files.wordpress.com/2015/10/classic-lady.jpg"
  },
  
  {
    key: "3",
    title: "test3 title",
    author:"test3 author",
    imgSrc:"https://exquisiteemmalisa.files.wordpress.com/2015/10/classic-lady.jpg"
  },
  
  {
    key: "4",
    title: "test4 title",
    author:"test4 author",
    imgSrc:"https://exquisiteemmalisa.files.wordpress.com/2015/10/classic-lady.jpg"
  }
  
];
/* just for testing for the moment */

const AlbumsList = () => (
  <div>
    <HeaderLine title="Albums" subtitle="x Albums, y Songs">
      <Switch firstOption="Grid" secondOption="List"/>
    </HeaderLine>
    <Link to="/artists">Artists</Link>
    <Albums style="big" albums={albumsList}/>
  </div>
);

export default AlbumsList;