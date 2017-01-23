import React from 'react';

const Comment = (props) => {
  return (
      <li>
        <div className="comment-item-wrapper">
          <img src={ props.comment.picture.thumbnail } />
          <div className="comment-area">
            <div className="comment-owner">
              { `${ props.comment.name.first } ${ props.comment.name.last }` }
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </li>
    );
}

export default Comment;
