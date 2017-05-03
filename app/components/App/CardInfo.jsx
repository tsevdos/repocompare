import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

const titleStyle = {
  paddingTop: '0'
}

const cardStyle = {
  margin: '0 0 1.5em'
}

const cardTextStyle = {
  paddingTop: 0,
  paddingBottom: 0
}

const listStyle = {
  padding: 0
}

const listItemStyle = {
  padding: '5px 0',
  fontSize: '1.2em'
}

const CardInfo = observer(({ repo, removeRepo }) => (
  !repo.hasError ?
    <Card style={cardStyle}>
      <CardHeader
        title={repo.data.owner.login}
        subtitle={repo.data.owner.type}
        avatar={repo.data.owner.avatar_url}
      />
      <CardTitle title={repo.id} subtitle={repo.data.description} style={titleStyle} />
      <CardText style={cardTextStyle}>
        <List style={listStyle}>
          <ListItem style={listItemStyle} disabled={true}>
            Stars: <strong>{repo.data.stargazers_count.toLocaleString()}</strong>
          </ListItem>
          <ListItem style={listItemStyle} disabled={true}>
            Forks: <strong>{repo.data.forks_count.toLocaleString()}</strong>
          </ListItem>
          <ListItem style={listItemStyle} disabled={true}>
            Open Issues: <strong>{repo.data.open_issues_count.toLocaleString()}</strong>
          </ListItem>
          <ListItem style={listItemStyle} disabled={true}>
            Subscribers: <strong>{repo.data.subscribers_count.toLocaleString()}</strong>
          </ListItem>
        </List>
      </CardText>
      <CardActions>
        <FlatButton href={repo.data.html_url} label="Repository" target="_blank" primary={true} />
        {
          repo.data.homepage && <FlatButton href={repo.data.homepage} label="Site" target="_blank" primary={true} />
        }
        <FlatButton label="Remove Card" onTouchTap={(e) => removeRepo(repo.id)} secondary={true} />
      </CardActions>
    </Card>
  :
    <Card style={cardStyle}>
      <CardTitle title="Error" />
      <CardText>
        Repository {repo.id} cannot be fetched. Make sure repository {repo.id} exists!
      </CardText>
      <CardActions>
        <FlatButton label="Remove Card" onTouchTap={(e) => removeRepo(repo.id)} secondary={true} />
        <br style={{ clear: 'both' }} />
      </CardActions>
    </Card>
))

CardInfo.propTypes = {
  repo: PropTypes.observableObject,
  removeRepo: React.PropTypes.func.isRequired
}

export default CardInfo
