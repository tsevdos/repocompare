import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import './RepoInfo.scss';

const RepoInfo = observer(({ repo, removeRepo }) => {
  const animateClassName = repo.animate ? 'rubberBand' : '';

  return (
    repo.data ?
      <div className={`col-md-4 animated ${animateClassName}`}>
        <div className="panel panel-default panel-primary">
          <div className="panel-heading">
            <a href="#" className="close pull-right" aria-label="Close" onClick={removeRepo} data-repo-id={repo.id}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">close</span>
            </a>
            <h4>{repo.repoNameFull}</h4>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item"><strong><a href={repo.data.homepage} target="_blank" rel="noopener noreferrer">Official Site</a></strong></li>
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
      <div className="col-md-4">
        <div className="panel panel-default panel-danger">
          <div className="panel-heading">
            <a href="#" className="close pull-right" aria-label="Close" onClick={removeRepo} data-repo-id={repo.id}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">close</span>
            </a>
            <h4>{repo.repoNameFull}</h4>
          </div>
          <div className="panel-body">
            <p>Repo {repo.repoNameFull} doesn&apos;t exists!</p>
          </div>
        </div>
      </div>
  );
}
);

RepoInfo.propTypes = {
  repo: PropTypes.observableObject,
  removeRepo: React.PropTypes.func.isRequired
};

export default RepoInfo;
