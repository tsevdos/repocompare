import React from 'react';

const RepoInfo = ({repoData}) =>
(
  repoData ?
    <div className="col-md-4">
      <div className="panel panel-default panel-primary">
        <div className="panel-heading">
          <h4>{repoData.full_name}</h4>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item"><strong><a href="{repoData.homepage}">Official Site</a></strong></li>
            <li className="list-group-item">{repoData.description}</li>
            <li className="list-group-item"><span className="badge">{repoData.stargazers_count}</span>Stars</li>
            <li className="list-group-item"><span className="badge">{repoData.forks_count}</span>Forks</li>
            <li className="list-group-item"><span className="badge">{repoData.watchers_count}</span>Watchers</li>
            <li className="list-group-item"><span className="badge">{repoData.open_issues_count}</span>Open Issues</li>
            <li className="list-group-item"><span className="badge">{repoData.size}</span>File size</li>
          </ul>
        </div>
      </div>
    </div>
  :
    <div>No repo data :-(</div>
)

RepoInfo.propTypes = {
  repoData: React.PropTypes.object.isRequired
};

export default RepoInfo;
