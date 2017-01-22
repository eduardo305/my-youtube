import React, { Component } from 'react';

import SearchBar from '../container/search-bar';
import VideoDetail from '../container/video-detail';
import VideoList from '../container/video-list';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}
