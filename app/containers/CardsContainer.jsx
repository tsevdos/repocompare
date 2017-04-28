import React, { Component } from 'react'
import { PropTypes, inject } from 'mobx-react'
import { Cards } from 'components'

@inject('repoStore')
class CardsContainer extends Component {
  constructor(props) {
    super(props)
    this.removeRepo = this.removeRepo.bind(this)
    this.removeAllRepos = this.removeAllRepos.bind(this)
  }

  removeRepo(repoId) {
    this.props.repoStore.removeRepo(repoId)
  }

  removeAllRepos() {
    this.props.repoStore.removeAllRepos()
  }

  render() {
    return (
      <Cards
        repos={this.props.repoStore.repos}
        removeRepo={this.removeRepo}
        removeAllRepos={this.removeAllRepos}
      />
    )
  }

}

CardsContainer.propTypes = {
  repoStore: PropTypes.observableObject
}

export default CardsContainer
