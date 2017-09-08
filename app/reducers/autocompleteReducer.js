import * as ACTIONS from "../constants/actionTypes";
import initialState from "../initialState";

export default function autocompleteReducer(
  state = initialState.autocomplete,
  action
) {
  const { payload } = action;

  switch (action.type) {
    case ACTIONS.UPDATE_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: payload });
    case ACTIONS.ADD_SEARCH_RESULTS:
      return Object.assign({}, state, { results: [...payload] });
    case ACTIONS.RESET_AUTOCOMPLETE:
      return {
        searchTerm: "",
        results: []
      };
  }

  return state;
}
