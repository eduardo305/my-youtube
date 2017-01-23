import React, { Component } from 'react';
import { connect } from 'react-redux';


class VideoDetail extends Component {
  render() {
    if (!this.props.active) {
      return <div>Loading...</div>
    }

    const url = `https://www.youtube.com/embed/${this.props.active.activeVideo.id.videoId}`;

    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={ url }></iframe>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.activeVideo
  };
}

export default connect(mapStateToProps)(VideoDetail);
