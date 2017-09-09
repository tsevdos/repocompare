import * as ACTIONS from "../constants/actionTypes";
import Api from "../api/api";
import { addRepoToUrl, removeRepoFromUrl } from "helpers/browserHistory";

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

function repoNotFound(repo) {
  return {
    type: ACTIONS.REPO_NOT_FOUND,
    payload: repo
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
        addRepoToUrl(repoID);
      })
      .catch(response => {
        dispatch(repoNotFound(repoToFetch));
        console.log(response.message); // eslint-disable-line no-console
      });
  };
}

export function removeRepo(repoName) {
  return function(dispatch, getState) {
    dispatch({
      type: ACTIONS.REMOVE_REPO,
      payload: repoName
    });
    removeRepoFromUrl(repoName);
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
