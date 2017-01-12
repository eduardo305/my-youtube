import { combineReducers } from 'redux';
import SearchReducer from './search-reducer';
import ActiveReducer from './active-video-reducer';

const rootReducer = combineReducers({
  videos: SearchReducer,
  activeVideo: ActiveReducer
});

export default rootReducer;
