import { observable, action } from 'mobx'
import { fetchRepoData } from 'helpers/api'

export default class Repo {
  @observable isFetching;
  @observable isHighlighted;
  @observable hasError;

  constructor({ username = '', reponame = '' } = {}) {
    this.id = `${username}/${reponame}`
    this.isFetching = true
    this.isHighlighted = false
    this.hasError = false
    this.data = null
    this.setData()
  }

  setData() {
    fetchRepoData(this.id)
      .then(
        action((response) => {
          this.data = response.data
          this.isFetching = false
        })
      )
      .catch(
        action(() => {
          this.hasError = true
          this.isFetching = false
        })
      )
  }

  @action highlight() {
    this.isHighlighted = true
    setTimeout(() => (this.isHighlighted = false), 1000)
  }
}
