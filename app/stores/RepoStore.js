import { observable, action } from 'mobx';

class RepoStore {
  @observable repos = [];

  @action addRepo(repo) {
    this.repos.push(repo);
  }

}

const repoStore = new RepoStore();

export default repoStore;
export { RepoStore };
