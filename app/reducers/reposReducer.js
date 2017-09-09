import * as ACTIONS from "../constants/actionTypes";
import initialState from "../initialState";

export default function reposReducer(state = initialState.repos, action) {
  const { payload } = action;

  switch (action.type) {
    case ACTIONS.REPO_INITIALIZATION: {
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
    case ACTIONS.ADD_REPO_DATA: {
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
    case ACTIONS.REPO_NOT_FOUND: {
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
    case ACTIONS.REMOVE_REPO: {
      const repos = state.filter(repo => repo.id !== payload);
      return [...repos];
    }
    case ACTIONS.TOGGLE_REPO_HIGHLIGHT: {
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
