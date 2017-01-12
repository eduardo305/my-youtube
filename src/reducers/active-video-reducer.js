import { ACTIVE_VIDEO } from '../actions/action-types'; 

export default function(state = null, action) {
  switch(action.type) {
    case ACTIVE_VIDEO:
      return { ...state, activeVideo: action.payload }
    break;
    default:
      return state;
  }
}
