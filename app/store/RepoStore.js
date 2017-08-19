import { extendObservable, action } from "mobx";
import { removeRepoFromUrl } from "helpers/browserHistory";

export default class RepoStore {
  constructor() {
    extendObservable(this, {
      repos: []
    });
  }

  @action
  addRepo(repo) {
    this.repos.push(repo);
  }

  @action
  removeRepo(repoId) {
    const repoIndex = this.repos.findIndex(repo => repo.id === repoId);
    this.repos.splice(repoIndex, 1);
    removeRepoFromUrl(repoId);
  }

  @action
  removeAllRepos() {
    this.repos.clear();
  }
}
