import RepoStore from "./RepoStore";
import AutocompleteStore from "./AutocompleteStore";

const repoStore = new RepoStore();
const autocompleteStore = new AutocompleteStore();
const store = {
  repoStore,
  autocompleteStore
};

export default store;
