import React, { Component } from 'react';

const VideoItem = function(props) {
  let formatDate = ({ publishedAt }) => {
    return new Date(publishedAt).toString();
  };

  const { id, snippet } = props.video;

  return (
    <li key={ id.videoId } onClick={ () => props.onSelectVideo(props.video) }>
      <div className="video-item-wrapper">
        <img src={ snippet.thumbnails.default.url } />
        <div className="description">
          <div>{ snippet.title }</div>
          <div className="publishAt">{ formatDate(snippet) }</div>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
