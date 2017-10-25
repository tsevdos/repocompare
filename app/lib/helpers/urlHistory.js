import qs from "qs";

const removeRepoFromUrl = (repoId, history) => {
  const { location } = history;
  const urlRepos = qs.parse(location.search.substr(1));
  const repos = urlRepos.repos.split(",") || [];
  const repoToRemoveIndex = repos.indexOf(repoId);

  if (repoToRemoveIndex !== -1) {
    repos.splice(repoToRemoveIndex, 1);
  }

  if (repos.length === 0) {
    clearUrlQuery(history);
  } else {
    const newQuery = `?repos=${repos.join(",")}`;
    replaceUrlQuery(history, newQuery);
  }

  return repos;
};

const addRepoToUrl = (repo, history) => {
  const { location } = history;
  const { username, reponame } = repo;
  const repository = `${username}/${reponame}`;
  const urlRepos = qs.parse(location.search.substr(1));
  const repos = urlRepos.repos ? urlRepos.repos.split(",") : [];

  if (repos.length === 0) {
    const newQuery = `?repos=${repository}`;
    replaceUrlQuery(history, newQuery);
  } else {
    const repoisAlreadyInUrl = repos.filter(
      repoName => repoName === repository
    );
    const newQuery = repoisAlreadyInUrl.length
      ? location.search
      : `${location.search},${repository}`;
    replaceUrlQuery(history, newQuery);
  }

  return repos;
};

const replaceUrlQuery = (history, query) => {
  history.replace({
    pathname: "/",
    search: query
  });
};

const clearUrlQuery = history => {
  history.replace({
    pathname: "/",
    search: ""
  });
};

export { addRepoToUrl, removeRepoFromUrl };
