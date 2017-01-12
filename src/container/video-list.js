import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoItem from './video-item';

class VideoList extends Component {

  renderVideoItem() {
    return this.props.videos.map((video) => {
      return <VideoItem
        key={video.id.videoId}
        video={video} />
    });
  }

  render() {
    if (!this.props.videos) {
      return <div />;
    }

    return (
      <div>{ this.renderVideoItem() }</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos.videos
  }
}

export default connect(mapStateToProps)(VideoList);
