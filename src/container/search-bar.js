import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.props.fetchVideos('norah jones');
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <input
        value={ this.state.term }
        onChange={ event => this.onSearchTermChange(event.target.value) }/>
      </div>
    );
  }

  onSearchTermChange(term) {
    this.setState({ term: term });
    this.props.fetchVideos(term);
  }
}

export default connect(null, { fetchVideos })(SearchBar);
