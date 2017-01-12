import { FETCH_VIDEOS_SUCCESS } from '../actions/action-types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload };
    break;
    default:
      return state;
  }
}
