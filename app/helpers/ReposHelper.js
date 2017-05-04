function getRepo(repoStr) {
  const username = repoStr.split('/')[0]
  const reponame = repoStr.split('/')[1]

  return { username, reponame }
}

export { getRepo }
