import React, { Component } from 'react';
import { PropTypes } from 'mobx-react';
import Repo from '../stores/Repo';
import App from '../components/App';

class AppContainer extends Component {
  constructor() {
    super();
    this.addRepo = this.addRepo.bind(this);
    this.removeRepo = this.removeRepo.bind(this);
  }

  addRepo(e) {
    e.preventDefault();

    const inputEl = e.target.querySelectorAll('#repo-name')[0];
    const inputValue = inputEl.value.trim();
    const username = inputValue.split('/')[0];
    const reponame = inputValue.split('/')[1];
    const repoToAddData = { username, reponame };
    const repoToAdd = new Repo(repoToAddData);

    inputEl.value = '';
    this.props.repoStore.addRepo(repoToAdd);
  }

  removeRepo(e) {
    e.preventDefault();
    const repoId = parseInt(e.currentTarget.dataset.repoId, 10);

    this.props.repoStore.removeRepo(repoId);
  }

  render() {
    return (
      <App
        repos={this.props.repoStore.repos}
        addRepo={this.addRepo}
        removeRepo={this.removeRepo}
      />
    );
  }
}

AppContainer.propTypes = {
  repoStore: PropTypes.observableObject
};

export default AppContainer;
