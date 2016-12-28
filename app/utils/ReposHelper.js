import config from 'config/config';

function getReposFromConfig(categoryStr, delimiter = '-') {
  let repos = [];
  const categories = categoryStr.split(delimiter);
  const categoryLevel1 = categories[0];
  const categoryLevel2 = categories[1];
  const categoryLevel3 = categories[2] ? categories[2] : false;

  if (categoryLevel3) {
    repos = config[categoryLevel1][categoryLevel2][categoryLevel3];
  } else {
    repos = config[categoryLevel1][categoryLevel2];
  }

  return repos;
}

function getRepo(repoStr) {
  const username = repoStr.split('/')[0];
  const reponame = repoStr.split('/')[1];

  return { username, reponame };
}

export { getRepo, getReposFromConfig };
