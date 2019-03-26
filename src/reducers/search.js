import { SAVE_SEARCH, LATEST_SEARCH } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_SEARCH:
      return [...state, action.payload];
    case LATEST_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
