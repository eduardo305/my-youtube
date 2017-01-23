import { FETCH_COMMENTS_SUCCESS } from '../actions/action-types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, all: action.payload.data.data }
      break;
    default:
      return state;
  }
}
