import { SAVE_SEARCH, GET_SEARCH, SAVE_POST, GET_POST, LATEST_SEARCH } from './types';

export function saveSearch(searchterm) {
  return {
    type: SAVE_SEARCH,
    payload: searchterm
  };
}

export function latestSearch(searchterm) {
  return {
    type: LATEST_SEARCH,
    payload: searchterm
  };
}

export function getSearch() {
  return {
    type: GET_SEARCH
  };
}

export function savePost(postList) {
    return {
        type: SAVE_POST,
        payload: postList
    }
}

export function getPostByKey(key) {
  return {
      type: GET_POST,
      payload: key
  }
}
