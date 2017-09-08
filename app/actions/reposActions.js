import * as ACTIONS from "../constants/actionTypes";
import Api from "../api/api";

function repoInit(repo) {
  return {
    type: ACTIONS.REPO_INITIALIZATION,
    payload: repo
  };
}

function addRepoData(data) {
  return {
    type: ACTIONS.ADD_REPO_DATA,
    payload: data
  };
}

export function fetchRepository(repoToFetch) {
  return function(dispatch, getState) {
    dispatch(repoInit(repoToFetch));

    return Api.fetchRepoPromise(repoToFetch)
      .then(response => {
        const { username, reponame } = repoToFetch;
        const repoID = `${username}/${reponame}`;
        const data = {
          data: response.data,
          repoID
        };

        dispatch(addRepoData(data));
      })
      .catch(error => {
        console.log(error); // Handle error
      });
  };
}

export function removeRepo(repoName) {
  return {
    type: ACTIONS.REMOVE_REPO,
    payload: repoName
  };
}

function toggleRepoHighlight(repo) {
  return {
    type: ACTIONS.TOGGLE_REPO_HIGHLIGHT,
    payload: repo
  };
}

export function hightlightRepo(repo) {
  return function(dispatch, getState) {
    dispatch(toggleRepoHighlight(repo));

    setTimeout(() => {
      dispatch(toggleRepoHighlight(repo));
    }, 1000);
  };
}
