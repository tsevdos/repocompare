import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import CardWrapper from './CardWrapper'

const Cards = observer(({ repos, removeRepo, removeAllRepos }) =>
(
  <div>
    {
      repos.length ?
        repos.map((repo) => <CardWrapper key={repo.id} repo={repo} removeRepo={removeRepo} />)
      :
        <Card>
          <CardHeader title="No repositories" />
          <CardText>
            Please repositories add repositories using the above autocomplete.
          </CardText>
        </Card>
    }
  </div>
 ))

Cards.propTypes = {
  repos: PropTypes.observableArray,
  removeRepo: React.PropTypes.func.isRequired,
  removeAllRepos: React.PropTypes.func.isRequired
}

export default Cards
