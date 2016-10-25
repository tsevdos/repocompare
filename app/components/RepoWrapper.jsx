import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import Loader from './Loader';
import RepoInfo from './RepoInfo';

const RepoWrapper = observer(({ repo, removeRepo }) =>
(
  repo.isFetching ?
    <div className="col-md-4">
      <Loader />
    </div>
  :
    <RepoInfo repo={repo} removeRepo={removeRepo} />
));

RepoWrapper.propTypes = {
  repo: PropTypes.observableObject.isRequired,
  removeRepo: React.PropTypes.func.isRequired
};

export default RepoWrapper;
