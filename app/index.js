import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { repoStore, autocompleteStore } from './stores'
import Repo from 'stores/models/Repo'
import routers from './config/routes'

const repocompare = new Repo({ username: 'tsevdos', reponame: 'repocompare' })
repoStore.addRepo(repocompare)

window.autocompleteStore = autocompleteStore

ReactDOM.render(
  <Provider repoStore={repoStore} autocompleteStore={autocompleteStore}>
    {routers}
  </Provider>,
  document.getElementById('app')
)
