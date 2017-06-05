import { browserHistory } from 'react-router'

const removeRepoFromUrl = (repoId) => {
  const location = browserHistory.getCurrentLocation()
  const urlRepos = (location.query && location.query.repos) ? location.query.repos : ''
  const repos = urlRepos.split('-') || []
  const repoToRemoveIndex = repos.indexOf(repoId)
  repos.splice(repoToRemoveIndex, 1)

  if (repos.length === 0) {
    // clear the entire repos query including ?repos=
    clearUrlQuery()
  } else {
    replaceUrlQuery(repos.join('-'))
  }

  return repos
}

const addRepoToUrl = (repoId) => {
  const location = browserHistory.getCurrentLocation()
  const urlRepos = (location.query && location.query.repos) ? location.query.repos : ''
  const repos = (urlRepos) ? urlRepos.split('-') : []

  if (repos.length === 0) {
    replaceUrlQuery(repoId)
  } else {
    const repoisAlreadyInUrl = repos.filter((repoName) => repoName === repoId)
    const newQuery = repoisAlreadyInUrl.length ? location.query.repos : `${location.query.repos}-${repoId}`
    replaceUrlQuery(newQuery)
  }

  return repos
}

const replaceUrlQuery = (reposQueryUrl) => {
  browserHistory.replace({
    pathname: '/',
    query: { repos: reposQueryUrl }
  })
}

const clearUrlQuery = () => {
  browserHistory.replace({
    pathname: '/',
    query: {}
  })
}

export {
  addRepoToUrl,
  removeRepoFromUrl
}
