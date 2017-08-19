import React, { Component, PropTypes } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router";
import App from "components/App";
import Repo from "store/Repo";
import { getRepo } from "helpers/ReposHelper";

@inject("store")
@observer
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.repoStore = props.store.repoStore;
    this.addReposFromUrl();
  }

  addReposFromUrl() {
    if (this.props.location.query && this.props.location.query.repos) {
      const repoNamesArr = this.props.location.query.repos.split("-");
      repoNamesArr.forEach(name => {
        const repoName = getRepo(name);
        const repoToAdd = new Repo(repoName);
        this.repoStore.addRepo(repoToAdd);
      });
    } else {
      const repocompare = new Repo({
        username: "tsevdos",
        reponame: "repocompare"
      });
      this.repoStore.addRepo(repocompare);
    }
  }

  render() {
    return <App />;
  }
}

AppContainer.childContextTypes = {
  store: PropTypes.object.isRequired
};

export default withRouter(AppContainer);
