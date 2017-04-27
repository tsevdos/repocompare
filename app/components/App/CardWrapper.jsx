import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import Loader from './Loader'
import CardInfo from './CardInfo'

const CardWrapper = observer(({ repo, removeRepo }) =>
(
  repo.isFetching ?
    <Loader />
  :
    <CardInfo repo={repo} removeRepo={removeRepo} />
))

CardWrapper.propTypes = {
  repo: PropTypes.observableObject.isRequired,
  removeRepo: React.PropTypes.func.isRequired
}

export default CardWrapper
