import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import searchRepositories from "queries/searchRepositories.gql";
import { withStyles } from "@material-ui/core/styles";
import GitHubAutoComplete from "./GitHubAutoComplete";
import styles from "./styles";

const GitHubAutoCompleteContainer = (props) => {
  const { repos, data } = props;
  const { loading, error } = data;
  const searchResults =
    (!loading && !error)
      ? data.search.edges.map((repo) => ({
          value: repo.node.nameWithOwner,
          label: repo.node.nameWithOwner
        }))
      : [];
  const displayedRepos = repos.map(({ id }) => ({
    value: id,
    label: id
  }));

  return (
    <GitHubAutoComplete
      {...props}
      searchResults={searchResults}
      displayedRepos={displayedRepos}
    />
  );
};

GitHubAutoCompleteContainer.propTypes = {
  searchterm: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    search: PropTypes.object
  }).isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired
};

export default graphql(searchRepositories, {
  options: (props) => ({
    variables: {
      searchterm: props.searchterm
    }
  })
})(withStyles(styles)(GitHubAutoCompleteContainer));
