import { observable, computed, action } from 'mobx';
import axios from 'axios';
import config from '../config/config';

export default class Repo {
  @observable isFetching;
  @observable data;

  constructor({ username = '', reponame = '' } = {}) {
    this.id = new Date().valueOf();
    this.username = username;
    this.reponame = reponame;
    this.isFetching = true;
    this.data = null;
    this.fetchData();
  }

  @computed get repoNameFull() {
    return `${this.username}/${this.reponame}`;
  }

  @action fetchData() {
    axios.get(`${config.githubAPIUrl}/repos/${this.repoNameFull}`)
      .then((response) => {
        this.data = response.data;
        this.isFetching = false;
      })
      .catch(() => {
        this.isFetching = false;
      });
  }

}
