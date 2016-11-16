import { observable, computed, action } from 'mobx';
import axios from 'axios';
import config from '../config/config';

export default class Repo {
  @observable isFetching;
  @observable animate;

  constructor({ username = '', reponame = '' } = {}) {
    this.id = new Date().valueOf();
    this.username = username;
    this.reponame = reponame;
    this.isFetching = true;
    this.animate = false;
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

  // TODO: Use more React-way to do the animation like ReactCSSTransitionGroup
  @action hightlight() {
    this.animate = true;
    setTimeout(() => (this.animate = false), 1000);
  }

}
