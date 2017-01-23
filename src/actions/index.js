import { FETCH_VIDEOS, ACTIVE_VIDEO, FETCH_VIDEOS_SUCCESS, FETCH_COMMENTS_SUCCESS } from './action-types';
import YTSearch from 'youtube-api-search';
import axios from 'axios';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

const API_USERS_ROOT = 'https://api-react-course.herokuapp.com/api/v1/users';

// export function fetchVideos(term) {
//   const request = new Promise(( resolve, reject ) => {
//     YTSearch({key: API_KEY, term: term}, (videos) => {
//       resolve(videos);
//     });
//   });
//
//   return {
//     type: FETCH_VIDEOS,
//     payload: request
//   };
// }

export function fetchVideos(term) {
  return function(dispatch) {
    const request = YTSearch({key: API_KEY, term: term}, (videos) => {

      dispatch({
        type: FETCH_VIDEOS_SUCCESS,
        payload: videos
      })

      dispatch(selectVideo(videos[0]));
    });
  };
}

export function selectVideo(video) {
  return{
    type: ACTIVE_VIDEO,
    payload: video
  }
}

export function fetchComments() {
  const request = axios.get(API_USERS_ROOT);

  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: request
  }
}
