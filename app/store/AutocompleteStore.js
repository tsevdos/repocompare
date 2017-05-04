import { extendObservable, action } from 'mobx'
import { searchRepo } from 'helpers/api'

export default class AutocompleteStore {
  constructor(query = '') {
    extendObservable(this, {
      query,
      results: []
    })
  }

  @action
  search() {
    this.results.clear()
    searchRepo(this.query)
      .then((response) => response.data.items.map((repo) => repo.full_name))
      .then((data) => this.results.replace(data))
  }

  @action
  reset() {
    this.query = ''
    this.results.clear()
  }
}
