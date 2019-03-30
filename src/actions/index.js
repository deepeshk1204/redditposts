import { SAVE_SELECTED } from './types';

export function saveSelected(rows) {
return{
  type: SAVE_SELECTED,
  selected: rows
}
}
