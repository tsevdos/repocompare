import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { Table, TableBody, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import RepoWrapper from './RepoWrapper'

const tableHeaderColumnStyle = {
  textAlign: 'right'
}

const TableEl = observer(({ repos, removeRepo, removeAllRepos }) =>
(
  <Table selectable={false} style={{ tableLayout: 'auto' }}>
    <TableBody displayRowCheckbox={false} showRowHover={true}>
      <TableRow>
        <TableHeaderColumn tooltip="Full repository name">Name</TableHeaderColumn>
        <TableHeaderColumn tooltip="Links to githib repository and official site">Repo / Site</TableHeaderColumn>
        <TableHeaderColumn style={tableHeaderColumnStyle} tooltip="Number of stars">Stars</TableHeaderColumn>
        <TableHeaderColumn style={tableHeaderColumnStyle} tooltip="Number of forks">Forks</TableHeaderColumn>
        <TableHeaderColumn style={tableHeaderColumnStyle} tooltip="Number of stars">Watchers</TableHeaderColumn>
        <TableHeaderColumn style={tableHeaderColumnStyle} tooltip="Number of open issues">Open issues</TableHeaderColumn>
        <TableHeaderColumn style={tableHeaderColumnStyle} tooltip="Repository file size">File size</TableHeaderColumn>
        <TableHeaderColumn style={tableHeaderColumnStyle} tooltip="Remove repository">Remove</TableHeaderColumn>
      </TableRow>
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
