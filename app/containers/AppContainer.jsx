import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import qs from "qs";
import AutoComplete from "material-ui/AutoComplete";
import { Header, Cards } from "components";
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
// Actions
import {
  searchRepositories,
  resetAutocomplete
} from "redux/modules/autocomplete";
import {
  fetchRepository,
  removeRepo,
  hightlightRepo
} from "redux/modules/repos";

const autoCompleteStyle = {
  margin: "0 0 2em"
};

const textFieldStyle = {
  fontSize: "1.5em"
};

const divStyle = {
  padding: "0 24px"
};

class AppContainer extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired,
    autocomplete: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.fetchRepo = this.fetchRepo.bind(this);
  }

  componentWillMount() {
    const { history } = this.props;
    if (isEmpty(history.location.search)) {
      history.push({
        pathname: "/",
        search: "?repos=tsevdos%2Frepocompare"
      });
    }
  }

  componentDidMount() {
    const { fetchRepository, history } = this.props;
    const urlQuery = qs.parse(history.location.search.substr(1));
    const repoNames = urlQuery.repos.split("-");

    repoNames.forEach(name => {
      const repoName = this._getRepo(name);
      fetchRepository(repoName);
    });
  }

  fetchRepo(val) {
    const {
      repos,
      fetchRepository,
      resetAutocomplete,
      hightlightRepo
    } = this.props;
    const repoToAdd = this._getRepo(val.trim());
    const existingRepo = repos.find(
      repo => repo.id === `${repoToAdd.username}/${repoToAdd.reponame}`
    );

    if (existingRepo) {
      hightlightRepo(existingRepo);
    } else {
      fetchRepository(repoToAdd);
    }

    resetAutocomplete();
  }

  _getRepo(repoStr) {
    const username = repoStr.split("/")[0];
    const reponame = repoStr.split("/")[1];

    return { username, reponame };
  }

  render() {
    const { repos, autocomplete, searchRepositories, removeRepo } = this.props;
    const { searchTerm, results } = autocomplete;

    return (
      <div>
        <Header />
        <div style={divStyle}>
          <AutoComplete
            hintText="ex. lodash/lodash"
            searchText={searchTerm}
            dataSource={results}
            onUpdateInput={debounce(searchRepositories, 250)}
            floatingLabelText="Search a repository"
            fullWidth={true}
            onNewRequest={this.fetchRepo}
            style={autoCompleteStyle}
            textFieldStyle={textFieldStyle}
          />
          <Cards repos={repos} removeRepo={removeRepo} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
    autocomplete: state.autocomplete
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRepositories: bindActionCreators(searchRepositories, dispatch),
    fetchRepository: bindActionCreators(fetchRepository, dispatch),
    removeRepo: bindActionCreators(removeRepo, dispatch),
    hightlightRepo: bindActionCreators(hightlightRepo, dispatch),
    resetAutocomplete: bindActionCreators(resetAutocomplete, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(AppContainer)
);
