import React from 'react'
import { observer, PropTypes } from 'mobx-react'

const RemoveAllBtn = observer(({ repos, removeAllRepos }) =>
(
  repos.length > 0 ?
    <button type="button" className="btn btn-danger" onClick={removeAllRepos}><strong>Remove All</strong></button>
  :
    null
))

RemoveAllBtn.propTypes = {
  repos: PropTypes.observableArray,
  removeAllRepos: React.PropTypes.func.isRequired
}

export default RemoveAllBtn
