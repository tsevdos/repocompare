import { hashHistory } from "react-router";

const removeRepoFromUrl = repoId => {
  const location = hashHistory.getCurrentLocation();
  const urlRepos =
    location.query && location.query.repos ? location.query.repos : "";
  const repos = urlRepos.split("-") || [];
  const repoToRemoveIndex = repos.indexOf(repoId);

  if (repoToRemoveIndex !== -1) {
    repos.splice(repoToRemoveIndex, 1);
  }

  if (repos.length === 0) {
    // clear the entire repos query including ?repos=
    clearUrlQuery();
  } else {
    replaceUrlQuery(repos.join("-"));
  }

  return repos;
};

const addRepoToUrl = repoId => {
  const location = hashHistory.getCurrentLocation();
  const urlRepos =
    location.query && location.query.repos ? location.query.repos : "";
  const repos = urlRepos ? urlRepos.split("-") : [];

  if (repos.length === 0) {
    replaceUrlQuery(repoId);
  } else {
    const repoisAlreadyInUrl = repos.filter(repoName => repoName === repoId);
    const newQuery = repoisAlreadyInUrl.length
      ? location.query.repos
      : `${location.query.repos}-${repoId}`;
    replaceUrlQuery(newQuery);
  }

  return repos;
};

const replaceUrlQuery = reposQueryUrl => {
  hashHistory.replace({
    pathname: "/",
    query: { repos: reposQueryUrl }
  });
};

const clearUrlQuery = () => {
  hashHistory.replace({
    pathname: "/",
    query: {}
  });
};

export { addRepoToUrl, removeRepoFromUrl };
