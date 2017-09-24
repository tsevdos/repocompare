import initialState from "../initialState";
import Api from "../../lib/githubApi";
import { addRepoToUrl, removeRepoFromUrl } from "../../lib/helpers/browserHistory";

// Actions
const REPO_INITIALIZATION = "repos/REPO_INITIALIZATION";
const REPO_NOT_FOUND = "repos/REPO_NOT_FOUND";
const ADD_REPO_DATA = "repos/ADD_REPO_DATA";
const REMOVE_REPO = "repos/REMOVE_REPO";
const TOGGLE_REPO_HIGHLIGHT = "repos/TOGGLE_REPO_HIGHLIGHT";

// Action Creators
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
      type: REMOVE_REPO,
      payload: repoName
    });
    removeRepoFromUrl(repoName);
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

function repoInit(repo) {
  return {
    type: REPO_INITIALIZATION,
    payload: repo
  };
}

function addRepoData(data) {
  return {
    type: ADD_REPO_DATA,
    payload: data
  };
}

function repoNotFound(repo) {
  return {
    type: REPO_NOT_FOUND,
    payload: repo
  };
}

function toggleRepoHighlight(repo) {
  return {
    type: TOGGLE_REPO_HIGHLIGHT,
    payload: repo
  };
}

// Reducer
export default function reposReducer(state = initialState.repos, action) {
  const { payload } = action;

  switch (action.type) {
    case REPO_INITIALIZATION: {
      const { username = "", reponame = "" } = payload;
      const repo = {
        id: `${username}/${reponame}`,
        isFetching: true,
        isHighlighted: false,
        hasError: false,
        data: null
      };

      return [...state, repo];
    }
    case ADD_REPO_DATA: {
      const { data, repoID } = payload;
      const repos = state.map(repo => {
        const { id } = repo;
        if (repoID === id) {
          return {
            ...repo,
            isFetching: false,
            data
          };
        }

        return repo;
      });

      return [...repos];
    }
    case REPO_NOT_FOUND: {
      const repos = state.map(repo => {
        const { username = "", reponame = "" } = payload;
        const { id } = repo;
        if (`${username}/${reponame}` === id) {
          return {
            ...repo,
            isFetching: false,
            hasError: true
          };
        }

        return repo;
      });

      return [...repos];
    }
    case REMOVE_REPO: {
      const repos = state.filter(repo => repo.id !== payload);
      return [...repos];
    }
    case TOGGLE_REPO_HIGHLIGHT: {
      const repoToHighlightID = payload.id;
      const repos = state.map(repo => {
        const { id } = repo;
        if (repoToHighlightID === id) {
          return {
            ...repo,
            isHighlighted: !repo.isHighlighted
          };
        }

        return repo;
      });

      return [...repos];
    }
  }

  return state;
}
