import React, { Component } from 'react'
import { PropTypes, inject } from 'mobx-react'
import { Table } from 'components'

@inject('repoStore')
class TableContainer extends Component {
  constructor() {
    super()
    this.removeRepo = this.removeRepo.bind(this)
    this.removeAllRepos = this.removeAllRepos.bind(this)
  }

  removeRepo(e) {
    e.preventDefault()
    const repoId = e.currentTarget.dataset.repoId

    this.props.repoStore.removeRepo(repoId)
  }

  removeAllRepos() {
    this.props.repoStore.removeAllRepos()
  }

  render() {
    return (
      <Table
        repos={this.props.repoStore.repos}
        removeRepo={this.removeRepo}
        removeAllRepos={this.removeAllRepos}
      />
    )
  }

}

TableContainer.propTypes = {
  repoStore: PropTypes.observableObject
}

export default TableContainer
