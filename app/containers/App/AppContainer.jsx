import React, { Component } from 'react';
import { PropTypes, inject } from 'mobx-react';
import Repo from 'stores/Repo';
import { App } from 'components';
import { getRepo } from 'helpers/ReposHelper';

@inject('repoStore')
class AppContainer extends Component {
  constructor() {
    super();
    this.addRepo = this.addRepo.bind(this);
    this.removeRepo = this.removeRepo.bind(this);
    this.removeAllRepos = this.removeAllRepos.bind(this);
  }

  componentDidMount() {
    this.repoStore = this.props.repoStore;
  }

  addRepo(e) {
    e.preventDefault();

    const inputEl = e.target.querySelectorAll('#repo-name')[0];
    const inputValue = inputEl.value.trim();
    const repoToAddData = getRepo(inputValue);
    const existingRepos = this.repoStore.repos.filter((repo) => repo.repoNameFull === `${repoToAddData.username}/${repoToAddData.reponame}`);

    inputEl.value = '';

    if (existingRepos.length > 0) {
      existingRepos[0].hightlight();
    } else {
      const repoToAdd = new Repo(repoToAddData);
      this.repoStore.addRepo(repoToAdd);
    }
  }

  removeRepo(e) {
    e.preventDefault();
    const repoId = e.currentTarget.dataset.repoId;

    this.repoStore.removeRepo(repoId);
  }

  removeAllRepos() {
    this.repoStore.removeAllRepos();
  }

  render() {
    return (
      <App
        repos={this.props.repoStore.repos}
        addRepo={this.addRepo}
        removeRepo={this.removeRepo}
        removeAllRepos={this.removeAllRepos}
      />
    );
  }
}

AppContainer.propTypes = {
  repoStore: PropTypes.observableObject
};

export default AppContainer;
