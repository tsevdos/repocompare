import RepoStore from './RepoStore'
import Repo from './Repo'
import AutocompleteStore from './AutocompleteStore'

const repoStore = new RepoStore()
const repocompare = new Repo({ username: 'tsevdos', reponame: 'repocompare' })
repoStore.addRepo(repocompare)

const autocompleteStore = new AutocompleteStore()

const store = {
  repoStore,
  autocompleteStore
}

export default store
