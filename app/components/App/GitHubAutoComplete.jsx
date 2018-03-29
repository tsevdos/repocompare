import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import searchRepositories from "queries/searchRepositories.gql";
import AutoComplete from "material-ui/AutoComplete";

const GitHubAutoComplete = ({
  searchterm,
  data,
  onUpdateInput,
  onNewRequest
}) => {
  const { loading, error } = data;
  const searchResults =
    !loading && !error
      ? data.search.edges.map(repo => repo.node.nameWithOwner)
      : [];

  return (
    <AutoComplete
      hintText="ex. lodash"
      searchText={searchterm}
      dataSource={searchResults}
      onUpdateInput={onUpdateInput}
      floatingLabelText="Search a repository"
      fullWidth={true}
      onNewRequest={onNewRequest}
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
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    search: PropTypes.object
  }).isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  onNewRequest: PropTypes.func.isRequired
};

export default graphql(searchRepositories, {
  options: props => ({
    variables: {
      searchterm: props.searchterm
    }
  })
})(GitHubAutoComplete);
