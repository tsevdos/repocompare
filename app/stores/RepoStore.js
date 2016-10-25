import { observable, action } from 'mobx';

class RepoStore {
  @observable repos = [];

  @action addRepo(repo) {
    this.repos.push(repo);
  }

  @action removeRepo(repoId) {
    const repoIndex = this.repos.findIndex((repo) => repo.id === repoId);
    this.repos.splice(repoIndex, 1);
  }
}

const repoStore = new RepoStore();

export default repoStore;
export { RepoStore };
