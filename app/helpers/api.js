import axios from 'axios';
import { githubAPIUrl, basicAuth } from 'config/config';

function fetchData(repo) {
  const url = `${githubAPIUrl}/repos/${repo.id}`;

  return axios.get(url, { auth: basicAuth })
    .then((response) => {
      repo.data = response.data;
      repo.isFetching = false;
    })
    .catch(() => {
      repo.hasError = true;
      repo.isFetching = false;
    });
}

function searchRepo(query, autocomplete) {
  const url = `${githubAPIUrl}/search/repositories?q=${query}`;

  return axios.get(url, { auth: basicAuth })
    .then((response) => {
      const searchedRepos = response.data.items.map((repo) => ({ name: repo.full_name }));
      autocomplete.setState({ repos: searchedRepos });
    });
}

export { fetchData, searchRepo };
