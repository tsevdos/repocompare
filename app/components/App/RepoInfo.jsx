import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import { first, span } from './RepoInfo.css';
import filesize from 'file-size';

const RepoInfo = observer(({ repo, removeRepo }) => {
  const animateClassName = repo.animate ? 'info' : '';

  return (
    !repo.hasError ?
      <tr className={animateClassName}>
        <th scope="row" className={first}>
          {repo.id}&nbsp;
          <span className={span}>
            (
              {
              repo.data.homepage ?
                <span><a href={repo.data.homepage} target="_blank">site</a> / </span>
                : null
              }
            <a href={repo.data.html_url} target="_blank">repo</a>)
          </span>
        </th>
        <td>{repo.data.stargazers_count.toLocaleString()}</td>
        <td>{repo.data.forks_count.toLocaleString()}</td>
        <td>{repo.data.watchers_count.toLocaleString()}</td>
        <td>{repo.data.open_issues_count.toLocaleString()}</td>
        <td>{filesize(repo.data.size).human()}</td>
        <td>
          <button type="button" className="btn btn-danger btn-sm" onClick={removeRepo} data-repo-id={repo.id}>
            <strong>X</strong>
          </button>
        </td>
      </tr>
    :
      <tr className="danger">
        <th scope="row" className="first" colSpan="6">Repository {repo.id} cannot be fetched. Make sure repository {repo.id} exists!</th>
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
