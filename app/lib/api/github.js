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

export default {
  fetchRepoPromise
};
