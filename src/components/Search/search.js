import React, { Component } from 'react';

import './search.css';

import searchImg from '../../assets/img/search.png';

class Search extends Component {
  state = {
    query: ''
  };

  handleSubmit = (event) => {
    // TODO: get string ready to send to parent component
    event.preventDefault();
    const { query } = this.state;
    this.props.onFormSubmit(query);
  };

  handleChange = (event) => {
    // TODO: get the input value
    const query = event.target.value;
    this.setState({ query });
  };

  render = () => {
    const { query } = this.state;

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <img className="search__image" alt="Search" src={searchImg} />
        <input
          type="text"
          name="Search"
          className="search__song"
          placeholder="Search for a song..."
          onChange={this.handleChange}
          value={query}
        />
      </form>
    );
  };
}

export default Search;
