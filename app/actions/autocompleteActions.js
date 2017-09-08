import * as ACTIONS from "../constants/actionTypes";
import Api from "../api/api";

function updateSearchTerm(query) {
  return {
    type: ACTIONS.UPDATE_SEARCH_TERM,
    payload: query
  };
}

export function addSearchResults(resultsRepos) {
  return {
    type: ACTIONS.ADD_SEARCH_RESULTS,
    payload: resultsRepos
  };
}

export function resetAutocomplete() {
  return {
    type: ACTIONS.RESET_AUTOCOMPLETE
  };
}

export function searchRepositories(query) {
  return function(dispatch, getState) {
    dispatch(updateSearchTerm(query));

    if (query.length < 3) {
      return;
    }

    return Api.searchReposPromise(query)
      .then(response => {
        const searchReposNames = response.data.items.map(repo => repo.full_name);
        dispatch(addSearchResults(searchReposNames));
      })
      .catch(error => {
        // debugger;
        console.log(error); // Handle error
      });
  };
}
