import React from 'react';
import { PropTypes } from 'mobx-react';
import { observer } from 'mobx-react';
import Loader from './Loader';

const RepoInfo = observer(({repo}) =>
(
  repo.isFetching ?
    <div className="col-md-4">
      <Loader />
    </div>
  :
    repo.data ?
      <div className="col-md-4">
        <div className="panel panel-default panel-primary">
          <div className="panel-heading">
            <h4>{repo.data.full_name}</h4>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item"><strong><a href={repo.data.homepage} target="_blank">Official Site</a></strong></li>
              <li className="list-group-item description">{repo.data.description}</li>
              <li className="list-group-item"><span className="badge">{repo.data.stargazers_count}</span>Stars</li>
              <li className="list-group-item"><span className="badge">{repo.data.forks_count}</span>Forks</li>
              <li className="list-group-item"><span className="badge">{repo.data.watchers_count}</span>Watchers</li>
              <li className="list-group-item"><span className="badge">{repo.data.open_issues_count}</span>Open Issues</li>
              <li className="list-group-item"><span className="badge">{repo.data.size}</span>File size</li>
            </ul>
          </div>
        </div>
      </div>
   :
     <div>Error</div>
));

RepoInfo.propTypes = {
  repo: PropTypes.observableObject
};

export default RepoInfo;
