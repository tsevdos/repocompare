import { observable, action } from 'mobx';
import axios from 'axios';

import config from '../config/config';

class RepoStore {
  @observable repos = [];

  @action addRepo(repo) {
    this.repos.push(repo);
  }

}

const repoStore = new RepoStore();

export default repoStore;
export { RepoStore };
