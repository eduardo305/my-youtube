import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVideos } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.props.fetchVideos('norah jones');
  }

  render() {
    return (
      <div>
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

function mapStateToProps(state) {
  return {
    videos: state.videos.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos: fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
