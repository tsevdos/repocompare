import axios from 'axios';
import config from 'config/config';

function fetchData(repo) {
  const url = `${config.githubAPIUrl}/repos/${repo.id}`;

  return axios.get(url)
    .then((response) => {
      repo.data = response.data;
      repo.isFetching = false;
    })
    .catch(() => {
      repo.hasError = true;
      repo.isFetching = false;
    });
}

export { fetchData };
