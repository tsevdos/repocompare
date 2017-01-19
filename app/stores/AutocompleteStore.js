import { observable, action } from 'mobx';
import { searchRepo } from 'helpers/api';

class AutocompleteStore {
  @observable query = '';
  @observable results = [];

  constructor(query = '') {
    this.query = query;
  }

  @action search() {
    this.results.clear();
    searchRepo(this.query)
      .then((response) => response.data.items.map((repo) => ({ name: repo.full_name })))
      .then((data) => this.results.replace(data));
  }

  @action reset() {
    this.query = '';
    this.results.clear();
  }
}

const autocompleteStore = new AutocompleteStore();

export default autocompleteStore;
export { AutocompleteStore };
