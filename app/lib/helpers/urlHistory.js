const mapReposToURL = (repos, history) => {
  if (repos.length === 0) {
    clearUrlQuery(history);
    return;
  }

  const query = repos.map(({id}) => id).join(',');
  replaceUrlQuery(history, `?repos=${query}`);
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

export { mapReposToURL };
