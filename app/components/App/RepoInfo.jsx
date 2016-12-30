import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import { first } from './RepoInfo.css';

const RepoInfo = observer(({ repo, removeRepo }) => {
  const animateClassName = repo.animate ? 'info' : '';

  return (
    repo.data ?
      <tr className={animateClassName}>
        <th scope="row" className={first}><a href={repo.data.homepage} target="_blank" rel="noopener noreferrer">{repo.repoNameFull}</a></th>
        <td>{repo.data.stargazers_count}</td>
        <td>{repo.data.forks_count}</td>
        <td>{repo.data.watchers_count}</td>
        <td>{repo.data.open_issues_count}</td>
        <td>{repo.data.size}</td>
        <td>
          <button type="button" className="btn btn-danger btn-sm" onClick={removeRepo} data-repo-id={repo.id}>
            <strong>X</strong>
          </button>
        </td>
      </tr>
    :
      <tr className="danger">
        <th scope="row" className="first" colSpan="6">Repo {repo.repoNameFull}doesn&apos;t exists!</th>
        <td>
          <button type="button" className="btn btn-danger btn-sm" onClick={removeRepo} data-repo-id={repo.id}>
            <strong>X</strong>
          </button>
        </td>
      </tr>
  );
});

RepoInfo.propTypes = {
  repo: PropTypes.observableObject,
  removeRepo: React.PropTypes.func.isRequired
};

export default RepoInfo;
