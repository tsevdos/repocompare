import * as ACTIONS from "../constants/actionTypes";
import { fetchRepoPromise } from "../api/api";

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
  return function (dispatch, getState) {
    dispatch(repoInit(repoToFetch));

    return fetchRepoPromise(repoToFetch)
      .then((response) => {
        const { username, reponame } = repoToFetch;
        const repoID = `${username}/${reponame}`;
        const data = {
          data: response.data,
          repoID
        };

        dispatch(addRepoData(data));
      })
      .catch((error) => {
        // debugger;
        console.log(error); // Handle error
      });
  };
}
