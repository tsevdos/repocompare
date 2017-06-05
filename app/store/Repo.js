import { extendObservable, action } from 'mobx'
import { fetchRepoData } from 'helpers/api'
import { addRepoToUrl } from 'helpers/browserHistory'

export default class Repo {
  constructor({ username = '', reponame = '' } = {}) {
    this.id = `${username}/${reponame}`
    this.data = null
    extendObservable(this, {
      isFetching: true,
      isHighlighted: false,
      hasError: false
    })
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
      .then(() => {
        addRepoToUrl(this.id)
      })
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
