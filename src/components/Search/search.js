import React, { Component } from 'react';
import queryString from 'query-string';

import './search.css';

import searchImg from '../../assets/img/search.png';

class Search extends Component {
  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <img className="search__image" alt="Search" src={searchImg} />
        <input
          type="text"
          name="Search"
          className="search__song"
          placeholder="Search for a song..."
          value={search}
        />
      </div>
    );
  }
}

export default Search;
