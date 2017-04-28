import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'mobx-react'
import { repoStore, autocompleteStore } from './stores'
import Repo from 'stores/models/Repo'
import routers from './config/routes'
import Typography from 'typography'
import githubTheme from 'typography-theme-github'

const typography = new Typography(githubTheme)
typography.injectStyles()

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const repocompare = new Repo({ username: 'tsevdos', reponame: 'repocompare' })
repoStore.addRepo(repocompare)

ReactDOM.render(
  <Provider repoStore={repoStore} autocompleteStore={autocompleteStore}>
    <MuiThemeProvider>
      {routers}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
