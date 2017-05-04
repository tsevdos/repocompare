import { extendObservable, action } from 'mobx'

export default class RepoStore {
  constructor() {
    extendObservable(this, {
      repos: []
    })
  }

  @action
  addRepo(repo) {
    this.repos.push(repo)
  }

  @action
  removeRepo(repoId) {
    const repoIndex = this.repos.findIndex((repo) => repo.id === repoId)
    this.repos.splice(repoIndex, 1)
  }

  @action
  removeAllRepos() {
    this.repos.clear()
  }
}
