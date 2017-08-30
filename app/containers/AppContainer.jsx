import React, { Component } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import App from "components/App";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.addReposFromUrl();
  }

  addReposFromUrl() {
    console.log(this.props.location.query)
    // if (this.props.location.query && this.props.location.query.repos) {
    //   const repoNamesArr = this.props.location.query.repos.split("-");
    //   repoNamesArr.forEach(name => {
    //     const repoName = getRepo(name);
    //     const repoToAdd = new Repo(repoName);
    //     this.repoStore.addRepo(repoToAdd);
    //   });
    // } else {
    //   const repocompare = new Repo({
    //     username: "tsevdos",
    //     reponame: "repocompare"
    //   });
    //   this.repoStore.addRepo(repocompare);
    // }

  }

  render() {
    console.log(this.props);

    return <App />;
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps, null)(withRouter(AppContainer));
