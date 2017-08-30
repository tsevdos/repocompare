import * as actionTypes from '../constants/actionTypes';
import initialState from '../initialState';

export default function reposReducer(state = initialState, action) {
  const newstate = Object.assign({}, state);

  // switch (action.type) {
  //   case actionTypes.APPEND_GENRES:
  //     newstate.genres = action.payload;

  //     return newstate;
  //   default:
  //     return state;
  // }

  return state;
}
