import React from 'react';

import './search.css';

import searchImg from '../../assets/img/search.png';

const Search = () => (
  <div className="search">
    <img className="search__image" alt="Search" src={searchImg} />
    <input
      type="text"
      name="Search"
      className="search__song"
      placeholder="Search for a song..."
    />
  </div>
);

export default Search;
