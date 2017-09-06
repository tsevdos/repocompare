import axios from "axios";
import { githubAPIUrl, basicAuth } from "constants/config";

function fetchRepoPromise(repo) {
  const { username, reponame } = repo;
  return axios.get(`${githubAPIUrl}/repos/${username}/${reponame}`, { auth: basicAuth });
}

function searchRepoPromise(query) {
  return axios.get(`${githubAPIUrl}/search/repositories?q=${query}&sort=stars`, { auth: basicAuth });
}

export { fetchRepoPromise, searchRepoPromise };
