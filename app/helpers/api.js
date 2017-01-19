import axios from 'axios';
import { githubAPIUrl, basicAuth } from 'config/config';

function fetchRepoData(repo) {
  return axios.get(`${githubAPIUrl}/repos/${repo}`, { auth: basicAuth });
}

function searchRepo(query) {
  return axios.get(`${githubAPIUrl}/search/repositories?q=${query}&sort=stars`, { auth: basicAuth });
}

export { fetchRepoData, searchRepo };
