import React, { Component } from 'react';

import SearchBar from '../container/search-bar';
import VideoDetail from '../container/video-detail';
import VideoList from '../container/video-list';
import VideoComments from '../container/video-comments';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar />
        <VideoDetail />
        <VideoList />
        <VideoComments />
      </div>
    );
  }
}
