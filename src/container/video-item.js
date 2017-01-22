import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';

class VideoItem extends Component {
  formatDate({ publishedAt }) {
    return new Date(publishedAt).toString();
  }

  render() {
    const { id, snippet } = this.props.video;
    return (
      <li key={ id.videoId } onClick={() => this.props.selectVideo(this.props.video)}>
        <div className="video-item-wrapper">
          <img src={ snippet.thumbnails.default.url } />
          <div className="description">
            <div>{ snippet.title }</div>
            <div className="publishAt">{ this.formatDate(snippet) }</div>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, { selectVideo })(VideoItem);
