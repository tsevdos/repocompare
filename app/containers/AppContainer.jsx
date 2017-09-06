import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import _ from "lodash";
import { fetchRepository } from "../actions/reposActions";
import AutoComplete from "material-ui/AutoComplete";
import { Cards } from "components";

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

  componentWillMount() {
    const { router } = this.props;
    if (_.isEmpty(router.location.query)) {
      router.push({
        pathname: "/",
        query: {
          repos: "tsevdos/repocompare"
        }
      });
    }
  }

  componentDidMount() {
    const { fetchRepository, router } = this.props;
    const repoNamesQuery = router.location.query.repos.split("-");

    repoNamesQuery.forEach(name => {
      const repoName = this._getRepo(name);
      fetchRepository(repoName);
    });
  }

  _getRepo(repoStr) {
    const username = repoStr.split("/")[0];
    const reponame = repoStr.split("/")[1];

    return { username, reponame };
  }

  render() {
    const { repos } = this.props;

    return (
      <div style={divStyle}>
        <AutoComplete
          hintText="ex. lodash/lodash"
          searchText="test"
          dataSource={["test", "testing"]}
          onUpdateInput={() => {}}
          floatingLabelText="Search a repository"
          fullWidth={true}
          onNewRequest={() => {}}
          style={autoCompleteStyle}
          textFieldStyle={textFieldStyle}
        />
        <Cards repos={repos} removeRepo={() => {}} removeAllRepos={() => {}} />
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
    fetchRepository: bindActionCreators(fetchRepository, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppContainer));
