import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import RepoWrapper from './RepoWrapper'

const TableEl = observer(({ repos, removeRepo, removeAllRepos }) =>
(
  <Table selectable={false}>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Repo / Site</TableHeaderColumn>
        <TableHeaderColumn>Stars</TableHeaderColumn>
        <TableHeaderColumn>Forks</TableHeaderColumn>
        <TableHeaderColumn>Watchers</TableHeaderColumn>
        <TableHeaderColumn>Open issues</TableHeaderColumn>
        <TableHeaderColumn>File size</TableHeaderColumn>
        <TableHeaderColumn>Remove</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody showRowHover={true}>
    {
      repos.length ?
        repos.map((repo) => <RepoWrapper key={repo.id} repo={repo} removeRepo={removeRepo} />)
      :
        <TableRow>
          <TableRowColumn colSpan={8}>Add repos using the autocomplete.</TableRowColumn>
        </TableRow>
    }
    </TableBody>
  </Table>
))

TableEl.propTypes = {
  repos: PropTypes.observableArray,
  removeRepo: React.PropTypes.func.isRequired,
  removeAllRepos: React.PropTypes.func.isRequired
}

export default TableEl
