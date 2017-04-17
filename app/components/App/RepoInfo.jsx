import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import prettyBytes from 'pretty-bytes'

const tableRowColumnStyle = {
  textAlign: 'right'
}

const RepoInfo = observer(({ repo, removeRepo }) => (
  !repo.hasError ?
    <TableRow selectable={false}>
      <TableRowColumn>{repo.id}</TableRowColumn>
      <TableRowColumn>
        <a href={repo.data.html_url} target="_blank">repository</a>
        {
          repo.data.homepage && <span> / <a href={repo.data.homepage} target="_blank">site</a></span>
        }
      </TableRowColumn>
      <TableRowColumn style={tableRowColumnStyle}>{repo.data.stargazers_count.toLocaleString()}</TableRowColumn>
      <TableRowColumn style={tableRowColumnStyle}>{repo.data.forks_count.toLocaleString()}</TableRowColumn>
      <TableRowColumn style={tableRowColumnStyle}>{repo.data.watchers_count.toLocaleString()}</TableRowColumn>
      <TableRowColumn style={tableRowColumnStyle}>{repo.data.open_issues_count.toLocaleString()}</TableRowColumn>
      <TableRowColumn style={tableRowColumnStyle}>{prettyBytes(repo.data.size)}</TableRowColumn>
      <TableRowColumn style={tableRowColumnStyle}>
        <IconButton onTouchTap={(e) => removeRepo(repo.id)}>
          <FontIcon className="material-icons">delete</FontIcon>
        </IconButton>
      </TableRowColumn>
    </TableRow>
  :
    <TableRow selectable={false}>
      <TableRowColumn colSpan={7}>Repository {repo.id} cannot be fetched. Make sure repository {repo.id} exists!</TableRowColumn>
      <TableRowColumn style={{ textAlign: 'right' }}>
        <IconButton onTouchTap={(e) => removeRepo(repo.id)}>
          <FontIcon className="material-icons">delete</FontIcon>
        </IconButton>
      </TableRowColumn>
    </TableRow>
))

RepoInfo.propTypes = {
  repo: PropTypes.observableObject,
  removeRepo: React.PropTypes.func.isRequired
}

export default RepoInfo
