import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import Loader from './Loader';
import RepoInfo from './RepoInfo';

const RepoWrapper = observer(({ repo }) =>
(
  repo.isFetching ?
    <div className="col-md-4">
      <Loader />
    </div>
  :
    <RepoInfo repo={repo} />
));

RepoWrapper.propTypes = {
  repo: PropTypes.observableObject
};

export default RepoWrapper;
