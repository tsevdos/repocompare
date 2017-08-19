import React, { Component, PropTypes } from "react";
import { inject } from "mobx-react";
import { Cards } from "components";

@inject("store")
class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.removeRepo = this.removeRepo.bind(this);
    this.removeAllRepos = this.removeAllRepos.bind(this);
  }

  removeRepo(repoId) {
    this.store.repoStore.removeRepo(repoId);
  }

  removeAllRepos() {
    this.store.repoStore.removeAllRepos();
  }

  render() {
    return (
      <Cards
        repos={this.store.repoStore.repos}
        removeRepo={this.removeRepo}
        removeAllRepos={this.removeAllRepos}
      />
    );
  }
}

CardsContainer.childContextTypes = {
  store: PropTypes.object.isRequired
};

export default CardsContainer;
