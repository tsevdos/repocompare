import React from 'react';
import { observer, PropTypes } from 'mobx-react';

const RemoveAllBtn = observer(({ repos, removeAllRepos }) =>
(
  repos.length > 0 ?
    <div className="row">
      <div className="col-sm-12">
        <button type="button" className="btn btn-danger pull-right" onClick={removeAllRepos}>Remove All</button>
      </div>
    </div>
  :
    null
));

RemoveAllBtn.propTypes = {
  repos: PropTypes.observableArray,
  removeAllRepos: React.PropTypes.func.isRequired
};

export default RemoveAllBtn;
