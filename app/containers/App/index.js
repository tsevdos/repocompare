import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import withUser from "HOC/withUser.jsx";
import { mapReposToURL } from "lib/helpers/urlHistory";
import App from "./App";

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
  };

  state = {
    searchterm: "",
    repos: []
  };

  componentDidMount() {
    const { history } = this.props;
    if (history.location.search === "") {
      history.push({
        pathname: "/",
        search: "?repos=tsevdos/repocompare"
      });
    }
    const reposOnUrlQuery =
      this._getReposOnSearchQueryUrl().map((name) => this._getRepo(name));
    this.setState({ repos: reposOnUrlQuery });
  }

  searchRepositories = (query) => {
    this.setState({ searchterm: query });
  }

  removeRepo = (repoId) => {
    const newRepos = this.state.repos.filter((repo) => repo.id !== repoId);
    this.setState({ repos: newRepos });
    mapReposToURL(newRepos, this.props.history);
  }

  handleReposChange = (repos) => {
    const newRepos = repos.map(({ value }) => this._getRepo(value));
    this.setState({ repos: newRepos });
    mapReposToURL(newRepos, this.props.history);
  }

  _getRepo(repoStr) {
    const owner = repoStr.split("/")[0];
    const name = repoStr.split("/")[1];

    return { id: repoStr, owner, name };
  }

  _getReposOnSearchQueryUrl() {
    const { history } = this.props;
    const urlQuery = history.location.search.substr(1).replace("repos=", "");

    return urlQuery.split(",");
  }

  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        searchRepositories={this.searchRepositories}
        handleReposChange={this.handleReposChange}
        removeRepo={this.removeRepo}
      />
    );
  }
}

export default withRouter(withUser(AppContainer));
