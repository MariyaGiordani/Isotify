import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import searchImg from '../../assets/img/search.png';

import './search.css';

class Search extends Component {
  state = {
    query: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    this.props.history.push(`/search/${query}`);
  };

  handleChange = (event) => {
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
          placeholder="Search..."
          onChange={this.handleChange}
          value={query}
        />
      </form>
    );
  };
}

export default withRouter(Search);
