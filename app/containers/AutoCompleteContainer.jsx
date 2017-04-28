import React, { Component } from 'react'
import mobx from 'mobx'
import { inject, observer, PropTypes } from 'mobx-react'
import AutoComplete from 'material-ui/AutoComplete'
import Repo from 'stores/models/Repo'
import { getRepo } from 'helpers/ReposHelper'

const autoCompleteStyle = {
  margin: '0 0 2em'
}

const textFieldStyle = {
  fontSize: '1.5em'
}

@inject('repoStore', 'autocompleteStore') @observer
class AutoCompleteContainer extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleNewRequest = this.handleNewRequest.bind(this)
  }

  handleUpdateInput(searchText) {
    this.props.autocompleteStore.query = searchText

    if (this.props.autocompleteStore.query.length > 3) {
      this.props.autocompleteStore.search()
    }
  }

  handleNewRequest(val, index) {
    const repoToAddData = getRepo(val.trim())

    const existingRepo = this.props.repoStore.repos.filter((repo) => {
      return repo.id === `${repoToAddData.username}/${repoToAddData.reponame}`
    })[0]

    if (existingRepo) {
      existingRepo.highlight()
    } else {
      const repoToAdd = new Repo(repoToAddData)
      this.props.repoStore.addRepo(repoToAdd)
    }

    this.props.autocompleteStore.reset()
  }

  render() {
    // Convert to normal JS from MobX array observable
    const results = mobx.toJS(this.props.autocompleteStore.results)

    return <AutoComplete
      hintText='ex. lodash/lodash'
      searchText={this.props.autocompleteStore.query}
      dataSource={results}
      onUpdateInput={this.handleUpdateInput}
      floatingLabelText='Search a repository'
      fullWidth={true}
      onNewRequest={this.handleNewRequest}
      style={autoCompleteStyle}
      textFieldStyle={textFieldStyle}
    />
  }
}

AutoCompleteContainer.propTypes = {
  autocompleteStore: PropTypes.observableObject,
  repoStore: PropTypes.observableObject
}

export default AutoCompleteContainer
