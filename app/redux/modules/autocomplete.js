import initialState from "../initialState";
import Api from "lib/githubApi";

// Actions
const UPDATE_SEARCH_TERM = "autocomplete/UPDATE_SEARCH_TERM";
const ADD_SEARCH_RESULTS = "autocomplete/ADD_SEARCH_RESULTS";
const RESET_AUTOCOMPLETE = "autocomplete/RESET_AUTOCOMPLETE";

// Action Creators
export function searchRepositories(query) {
  return function(dispatch, getState) {
    dispatch(updateSearchTerm(query));

    if (query.length < 4) {
      return;
    }

    return Api.searchReposPromise(query)
      .then(response => {
        const searchReposNames = response.data.items.map(
          repo => repo.full_name
        );
        dispatch(addSearchResults(searchReposNames));
      })
      .catch(response => {
        console.log(response.message); // eslint-disable-line no-console
      });
  };
}

export function resetAutocomplete() {
  return {
    type: RESET_AUTOCOMPLETE
  };
}

function updateSearchTerm(query) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: query
  };
}

export function addSearchResults(resultsRepos) {
  return {
    type: ADD_SEARCH_RESULTS,
    payload: resultsRepos
  };
}

// Reducer
export default function autocompleteReducer(
  state = initialState.autocomplete,
  action
) {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: payload });
    case ADD_SEARCH_RESULTS:
      return Object.assign({}, state, { results: [...payload] });
    case RESET_AUTOCOMPLETE:
      return {
        searchTerm: "",
        results: []
      };
  }

  return state;
}
