import { combineReducers } from 'redux';
import searchReducer from './search';
import postReducer from './post';

export default combineReducers({
  search: searchReducer,
  post: postReducer
});
