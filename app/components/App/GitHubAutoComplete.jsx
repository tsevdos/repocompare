import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import AutoComplete from "material-ui/AutoComplete";
import searchRepositories from "queries/searchRepositories.gql";

class GitHubAutoComplete extends Component {
  render() {
    const { searchterm, onUpdateInput, data } = this.props;
    const { loading, error } = data;
    const searchResults = (!loading && !error)
      ? data.search.edges.map((repo) => repo.node.nameWithOwner)
      : [];

    return (
      <AutoComplete
        hintText="ex. lodash"
        searchText={searchterm}
        dataSource={searchResults}
        onUpdateInput={onUpdateInput}
        floatingLabelText="Search a repository"
        fullWidth={true}
        onNewRequest={(e) => console.log(e)} // this.fetchRepo
        style={{
          margin: "0 0 2em"
        }}
        textFieldStyle={{
          fontSize: "1.5em"
        }}
      />
    );
  }
}

export default graphql(searchRepositories, {
  options: (props) => ({
    variables: {
      searchterm: props.searchterm
    }
  })
})(GitHubAutoComplete);
