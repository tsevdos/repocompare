import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { Row, Col } from 'react-flexbox-grid'
import CardWrapper from './CardWrapper'

const Cards = observer(({ repos, removeRepo, removeAllRepos }) =>
(
  <Row>
    {
      repos.length ?
        repos.map((repo) => {
          return (
            <Col xs={12} sm={6} md={4} key={repo.id}>
              <CardWrapper repo={repo} removeRepo={removeRepo} />
            </Col>
          )
        })
      :
        <Col xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="No repositories" />
            <CardText>
              Please repositories add repositories using the above autocomplete.
            </CardText>
          </Card>
        </Col>
    }
  </Row>
))

Cards.propTypes = {
  repos: PropTypes.observableArray,
  removeRepo: React.PropTypes.func.isRequired,
  removeAllRepos: React.PropTypes.func.isRequired
}

export default Cards
