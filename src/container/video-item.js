import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';
import { bindActionCreators } from 'redux';

class VideoItem extends Component {
  render() {
    const { id, snippet } = this.props.video;
    return (
      <li key={ id.videoId } onClick={() => this.props.selectVideo(this.props.video)}>
        <div className="wrapper">
          <img src={ snippet.thumbnails.default.url } />
          <div>{ snippet.title }</div>
        </div>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo:  selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);
