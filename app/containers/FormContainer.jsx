import React, { Component } from 'react';
import { PropTypes, inject } from 'mobx-react';
import Repo from 'stores/models/Repo';
import { Form } from 'components';
import { getRepo } from 'helpers/ReposHelper';

@inject('repoStore')
class FormContainer extends Component {
  constructor() {
    super();
    this.addRepo = this.addRepo.bind(this);
  }

  addRepo(e) {
    e.preventDefault();

    const inputEl = e.target.querySelectorAll('#repo-name')[0];
    const inputValue = inputEl.value.trim();
    const repoToAddData = getRepo(inputValue);
    const existingRepos = this.props.repoStore.repos.filter((repo) => repo.repoNameFull === `${repoToAddData.username}/${repoToAddData.reponame}`);

    inputEl.value = '';

    if (existingRepos.length > 0) {
      existingRepos[0].hightlight();
    } else {
      const repoToAdd = new Repo(repoToAddData);
      this.props.repoStore.addRepo(repoToAdd);
    }
  }

  render() {
    return (
      <Form addRepo={this.addRepo} />
    );
  }

}

FormContainer.propTypes = {
  repoStore: PropTypes.observableObject
};

export default FormContainer;
