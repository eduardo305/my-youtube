import { combineReducers } from 'redux';
import SearchReducer from './search-reducer';
import ActiveReducer from './active-video-reducer';
import CommentsReducer from './comments-reducer';

const rootReducer = combineReducers({
  videos: SearchReducer,
  activeVideo: ActiveReducer,
  comments: CommentsReducer
});

export default rootReducer;
