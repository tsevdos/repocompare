import * as ACTIONS from '../constants/actionTypes';
import initialState from '../initialState';

export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REPO_INITIALIZATION:
      const { username, reponame } = action.payload;
      const repo = {
        id: `${username}/${reponame}`,
        isFetching: true,
        isHighlighted: false,
        hasError: false,
        data: null,
      };

      return {
        ...state,
        repos: [...state.repos, repo]
      }
    case ACTIONS.ADD_REPO_DATA:
      const { data, repoID } = action.payload;

      return {
        ...state,
        repos: state.repos.map((repo) => {
          const { id } = repo;
          if (repoID === id) {
            return {
              ...repo,
              isFetching: false,
              data
            };
          }

          return repo;
        })
      };
  }

  return state;
}
