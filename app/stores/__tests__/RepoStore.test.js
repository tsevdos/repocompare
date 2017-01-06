import { RepoStore } from '../RepoStore';
import Repo from '../models/Repo';

describe('RepoStore', () => {
  beforeEach(function() {
    this.bootstrap = new Repo(
      {
        username: 'twbs',
        reponame: 'bootstrap'
      }
    );
    this.react = new Repo(
      {
        username: 'facebook',
        reponame: 'react'
      }
    );
    this.store = new RepoStore();
  });

  it('#addRepo', function() {
    this.store.addRepo(this.bootstrap);
    this.store.addRepo(this.react);

    expect(this.store.repos.length).toEqual(2);
  });

  it('#removeRepo', function() {
    this.store.addRepo(this.bootstrap);
    this.store.addRepo(this.react);
    this.store.removeRepo(this.react.id);
    expect(this.store.repos.length).toEqual(1);
    this.store.removeRepo(this.bootstrap.id);
    expect(this.store.repos.length).toEqual(0);
  });

  it('#removeRepo', function() {
    this.store.addRepo(this.bootstrap);
    this.store.addRepo(this.react);
    this.store.removeAllRepos();
    expect(this.store.repos.length).toEqual(0);
  });
});
