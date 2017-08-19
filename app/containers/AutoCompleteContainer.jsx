import React, { Component, PropTypes } from "react";
import mobx from "mobx";
import { inject, observer } from "mobx-react";
import AutoComplete from "material-ui/AutoComplete";
import Repo from "store/Repo";
import { getRepo } from "helpers/ReposHelper";

const autoCompleteStyle = {
  margin: "0 0 2em"
};

const textFieldStyle = {
  fontSize: "1.5em"
};

@inject("store")
@observer
class AutoCompleteContainer extends Component {
  constructor(props) {
    super(props);
    this.autocompleteStore = props.store.autocompleteStore;
    this.repoStore = props.store.repoStore;
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleUpdateInput(searchText) {
    this.autocompleteStore.query = searchText;

    if (this.autocompleteStore.query.length > 3) {
      this.autocompleteStore.search();
    }
  }

  handleNewRequest(val, index) {
    const repoToAdd = getRepo(val.trim());
    const existingRepo = this.repoStore.repos.filter(repo => {
      return repo.id === `${repoToAdd.username}/${repoToAdd.reponame}`;
    })[0];

    if (existingRepo) {
      existingRepo.highlight();
    } else {
      const repo = new Repo(repoToAdd);
      this.repoStore.addRepo(repo);
    }

    this.autocompleteStore.reset();
  }

  render() {
    // Convert to normal JS from MobX array observable
    const results = mobx.toJS(this.autocompleteStore.results);

    return (
      <AutoComplete
        hintText="ex. lodash/lodash"
        searchText={this.autocompleteStore.query}
        dataSource={results}
        onUpdateInput={this.handleUpdateInput}
        floatingLabelText="Search a repository"
        fullWidth={true}
        onNewRequest={this.handleNewRequest}
        style={autoCompleteStyle}
        textFieldStyle={textFieldStyle}
      />
    );
  }
}

AutoCompleteContainer.childContextTypes = {
  store: PropTypes.object.isRequired
};

export default AutoCompleteContainer;
