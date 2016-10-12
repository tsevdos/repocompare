import { observable, action } from 'mobx';
import axios from 'axios';

import config from '../config/config';

export default class AppState {
  @observable repos = [
    {
      id: 1,
      user: 'twbs',
      name: 'bootstrap',
      data: null
    },
    {
      id: 2,
      user: 'tsevdos',
      name: 'greek-in-tech',
      data: null
    },
    {
      id: 3,
      user: 'MostlyAdequate',
      name: 'mostly-adequate-guide',
      data: null
    }
  ];

  @action fetchRepoData(repo, index) {

    axios.get(`${config.githubAPIUrl}/repos/${repo.user}/${repo.name}`)
      .then((response) => {
        this.repos[index].data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addRepo(repoObj) {
    this.repos.push(repoObj);
    this.fetchRepoData(repoObj, this.repos.length - 1);
  }

}
