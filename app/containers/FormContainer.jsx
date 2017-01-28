import React, { Component } from 'react'
import { PropTypes, inject } from 'mobx-react'
import Repo from 'stores/models/Repo'
import { Form } from 'components'
import { getRepo } from 'helpers/ReposHelper'

@inject('repoStore', 'autocompleteStore')
class FormContainer extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const autoCompleteEl = e.target.querySelectorAll('#repo-name')[0]
    const inputValue = autoCompleteEl.value.trim()
    const repoToAddData = getRepo(inputValue)
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
    return (
      <Form handleSubmit={this.handleSubmit} />
    )
  }

}

FormContainer.propTypes = {
  repoStore: PropTypes.observableObject,
  autocompleteStore: PropTypes.observableObject
}

export default FormContainer
