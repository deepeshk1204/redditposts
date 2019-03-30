import { SAVE_SELECTED } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_SELECTED:
      return action.selected;
    default:
      return state;
  }
}
