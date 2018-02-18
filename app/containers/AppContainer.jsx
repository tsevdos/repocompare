import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import qs from "qs";
import { GitHubAutoComplete, Cards } from "components";
// Actions
import {
  fetchRepository,
  removeRepo,
  hightlightRepo
} from "redux/modules/repos";

class AppContainer extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      searchterm: ""
    };

    this.fetchRepo = this.fetchRepo.bind(this);
    this.searchRepositories = this.searchRepositories.bind(this);
  }

  searchRepositories(query) {
    this.setState({ searchterm: query });
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
    const { fetchRepository, history } = this.props;
    const urlQuery = qs.parse(history.location.search.substr(1));
    const repoNames = urlQuery.repos.split(",");

    repoNames.forEach(name => {
      const repoName = this._getRepo(name);
      fetchRepository(repoName, history);
    });
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
    const username = repoStr.split("/")[0];
    const reponame = repoStr.split("/")[1];

    return { username, reponame };
  }

  render() {
    const { repos, removeRepo } = this.props;
    const { searchterm } = this.state;

    return (
      <div style={{ padding: "0 24px" }}>
        <GitHubAutoComplete
          searchterm={searchterm}
          onUpdateInput={this.searchRepositories}
        />
        <Cards repos={repos} removeRepo={removeRepo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRepository: bindActionCreators(fetchRepository, dispatch),
    removeRepo: bindActionCreators(removeRepo, dispatch),
    hightlightRepo: bindActionCreators(hightlightRepo, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(AppContainer)
);
