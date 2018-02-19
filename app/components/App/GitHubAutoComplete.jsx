import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import searchRepositories from "queries/searchRepositories.gql";
import AutoComplete from "material-ui/AutoComplete";

const GitHubAutoComplete = ({ searchterm, onUpdateInput, data }) => {
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
};

GitHubAutoComplete.propTypes = {
  searchterm: PropTypes.string.isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    search: PropTypes.object
  }).isRequired
};

export default graphql(searchRepositories, {
  options: (props) => ({
    variables: {
      searchterm: props.searchterm
    }
  })
})(GitHubAutoComplete);
