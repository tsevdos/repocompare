import React, { Component } from 'react';
import { PropTypes, inject } from 'mobx-react';
import Repo from 'stores/models/Repo';
import { Header } from 'components';
import { getReposFromConfig } from 'helpers/ReposHelper';

@inject('repoStore')
class HeaderContainer extends Component {
  constructor() {
    super();
    this.addRepos = this.addRepos.bind(this);
  }

  addRepos(e) {
    e.preventDefault();
    const repos = getReposFromConfig(e.target.dataset.repos);

    repos.forEach((repoData) => {
      const repoToAdd = new Repo(repoData);
      this.props.repoStore.addRepo(repoToAdd);
    });
  }

  render() {
    const { currentPathName } = this.props;
    const displayReposMenu = currentPathName === '/';
    return (
      <Header addRepos={this.addRepos} displayReposMenu={displayReposMenu} />
    );
  }
}

HeaderContainer.propTypes = {
  repoStore: PropTypes.observableObject,
  currentPathName: React.PropTypes.string.isRequired
};

export default HeaderContainer;
