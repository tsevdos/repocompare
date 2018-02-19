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

  fetchRepo(val) {
    const {
      repos,
      fetchRepository,
      resetAutocomplete,
      hightlightRepo,
      history
    } = this.props;
    const repoToAdd = this._getRepo(val.trim());
    const existingRepo = repos.find(
      repo => repo.id === `${repoToAdd.username}/${repoToAdd.reponame}`
    );

    if (existingRepo) {
      hightlightRepo(existingRepo);
    } else {
      fetchRepository(repoToAdd, history);
    }

    resetAutocomplete();
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
        />
        <Cards
          repos={repos}
          removeRepo={'removeRepo'}
        />
      </div>
    );
  }
}

export default withRouter(AppContainer);
