import axios from "axios";
import axiosCancel from "axios-cancel";
import { githubAPIUrl, basicAuth } from "constants/config";

axiosCancel(axios, { debug: false });

function fetchRepoPromise(repo) {
  const { username, reponame } = repo;
  return axios.get(`${githubAPIUrl}/repos/${username}/${reponame}`, {
    auth: basicAuth
  });
}

function searchReposPromise(query) {
  return axios.get(
    `${githubAPIUrl}/search/repositories?q=${query}&sort=stars`,
    {
      auth: basicAuth,
      requestId: "searchRepos"
    }
  );
}

export default {
  fetchRepoPromise,
  searchReposPromise
};
