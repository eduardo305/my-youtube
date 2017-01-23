import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from '../components/comment';
import { fetchComments } from '../actions/index';

class VideoComments extends Component {
  constructor(props) {
    super(props);

    this.props.fetchComments()
  }

  renderComments() {
    return this.props.comments.map((comment) => {
      return <Comment key={ comment._id } comment={ comment }/>
    });
  }

  render() {
    if (!this.props.comments) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div>Comments:</div>
        <ul>
          { this.renderComments() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments.all
  };
}

export default connect(mapStateToProps, { fetchComments })(VideoComments);
