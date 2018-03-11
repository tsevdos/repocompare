import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";
import { GitHubAutoComplete, Cards } from "components";

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

  componentWillMount() {
    const { history } = this.props;
    if (history.location.search === "") {
      history.push({
        pathname: "/",
        search: "?repos=tsevdos/repocompare"
      });
    }
  }

  componentDidMount() {
    const { history } = this.props;
    const urlQuery = qs.parse(history.location.search.substr(1));
    const repoNames = urlQuery.repos.split(",");
    const reposOnUrlQuery = repoNames.map((name) => this._getRepo(name));
    this.setState({ repos: reposOnUrlQuery });
  }

  searchRepositories(query) {
    this.setState({ searchterm: query });
  }

  addRepo(reponame) {
    // TODO if already exists highlight it
    const repoToAdd = this._getRepo(reponame);
    const newRepos = this.state.repos.slice();
    newRepos.push(repoToAdd);
    this.setState({ searchterm: "", repos: newRepos });
  }

  removeRepo(repoId) {
    // Todo remove it from URL as well.
    const newRepos = this.state.repos.filter((repo) => repo.id !== repoId);
    this.setState({ repos: newRepos });
  }

  _getRepo(repoStr) {
    const owner = repoStr.split("/")[0];
    const name = repoStr.split("/")[1];

    return { id: repoStr, owner, name };
  }

  render() {
    const { searchterm, repos } = this.state;
    console.log(repos);

    return (
      <div style={{ padding: "0 24px" }}>
        <GitHubAutoComplete
          searchterm={searchterm}
          onUpdateInput={this.searchRepositories}
          onNewRequest={this.addRepo}
        />
        <Cards
          repos={repos}
          removeRepo={this.removeRepo}
        />
      </div>
    );
  }
}

export default withRouter(AppContainer);
