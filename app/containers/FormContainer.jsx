import React, { Component } from 'react';
import { PropTypes, inject } from 'mobx-react';
import Repo from 'stores/models/Repo';
import { Form } from 'components';
import { getRepo } from 'helpers/ReposHelper';

@inject('repoStore')
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      resetForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const autoCompleteEl = e.target.querySelectorAll('#repo-name')[0];
    const inputValue = autoCompleteEl.value.trim();
    const repoToAddData = getRepo(inputValue);
    const existingRepos = this.props.repoStore.repos.filter((repo) => repo.id === `${repoToAddData.username}/${repoToAddData.reponame}`);
    this.setState({resetForm: true});

    if (existingRepos.length > 0) {
      existingRepos[0].hightlight();
    } else {
      const repoToAdd = new Repo(repoToAddData);
      this.props.repoStore.addRepo(repoToAdd);
    }
  }

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        resetForm={this.state.resetForm}
      />
    );
  }

}

FormContainer.propTypes = {
  repoStore: PropTypes.observableObject
};

export default FormContainer;
