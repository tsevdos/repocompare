import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";
import { GitHubAutoComplete, Cards } from "components";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import withUser from "HOC/withUser.jsx";
import { addRepoToUrl, removeRepoFromUrl } from "lib/helpers/urlHistory";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
      repos: []
    };

    this.searchRepositories = this.searchRepositories.bind(this);
    this.addRepo = this.addRepo.bind(this);
    this.removeRepo = this.removeRepo.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    if (history.location.search === "") {
      history.push({
        pathname: "/",
        search: "?repos=tsevdos/repocompare"
      });
    }

    const reposOnUrlQuery = this._getReposOnSearchQueryUrl().map(name =>
      this._getRepo(name)
    );
    this.setState({ repos: reposOnUrlQuery });
  }

  searchRepositories(query) {
    this.setState({ searchterm: query });
  }

  addRepo(reponame) {
    const repoToAdd = this._getRepo(reponame);
    const existingRepoIndex = this.state.repos.findIndex(
      repo => repo.id === repoToAdd.id
    );

    if (existingRepoIndex > -1) {
      this.markRepoHighlighted(existingRepoIndex);
    } else {
      const newRepos = this.state.repos.slice();
      newRepos.push(repoToAdd);

      this.setState({ repos: newRepos });
      addRepoToUrl(repoToAdd.id, this.props.history);
    }

    this.setState({ searchterm: "" });
  }

  removeRepo(repoId) {
    const newRepos = this.state.repos.filter(repo => repo.id !== repoId);

    this.setState({ repos: newRepos });
    removeRepoFromUrl(repoId, this.props.history);
  }

  markRepoHighlighted(repoIndex) {
    this._toggleRepoHighlight(repoIndex);
    setTimeout(() => this._toggleRepoHighlight(repoIndex), 1000);
  }

  _getRepo(repoStr) {
    const owner = repoStr.split("/")[0];
    const name = repoStr.split("/")[1];

    return { id: repoStr, owner, name, isHighlighted: false };
  }

  _getReposOnSearchQueryUrl() {
    const { history } = this.props;
    const urlQuery = qs.parse(history.location.search.substr(1));

    return urlQuery.repos.split(",");
  }

  _toggleRepoHighlight(repoIndex) {
    const newRepos = this.state.repos.slice();
    newRepos[repoIndex].isHighlighted = !newRepos[repoIndex].isHighlighted;
    this.setState({ repos: newRepos });
  }

  render() {
    const { searchterm, repos } = this.state;
    const { isLoggedIn, loginUser } = this.props;

    if (!isLoggedIn) {
      return (
        <div style={{ padding: "24px" }}>
          <Card>
            <CardHeader
              title="Login to Github"
              subtitle="Please login to Github and start comparing repositories"
            />
            <CardActions>
              <FlatButton
                label="Github Login"
                onTouchTap={loginUser}
                secondary={true}
              />
            </CardActions>
          </Card>
          <p />
        </div>
      );
    }

    return (
      <div style={{ padding: "0 24px" }}>
        <GitHubAutoComplete
          searchterm={searchterm}
          onUpdateInput={this.searchRepositories}
          onNewRequest={this.addRepo}
        />
        <Cards repos={repos} removeRepo={this.removeRepo} />
      </div>
    );
  }
}

export default withUser(withRouter(AppContainer));
