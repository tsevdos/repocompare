import React from 'react';
import { observer, PropTypes } from 'mobx-react';

import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Form from './Form';
import RemoveAllBtn from './RemoveAllBtn';
import RepoWrapper from './RepoWrapper';

const App = observer(({ repos, addRepo, addRepos, removeRepo, removeAllRepos }) =>
(
  <div>
    <Header addRepos={addRepos} />
    <div id="main" className="container">
      <div className="jumbotron">
        <Form addRepo={addRepo} />
      </div>

      <div className="table-responsive">

        <table className="table table-hover">
          <thead>
            <tr>
              <th className="first">Repo</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Watchers</th>
              <th>Open issues</th>
              <th>File size</th>
              <th><RemoveAllBtn repos={repos} removeAllRepos={removeAllRepos} /></th>
            </tr>
          </thead>
          <tbody>
            {
              repos.length > 0 ?
                repos.map((repo) =>
                  <RepoWrapper key={repo.id} repo={repo} removeRepo={removeRepo} />)
              :
                <tr>
                  <th scope="row" colSpan="6">Add repos using the form above or select a category.</th>
                </tr>
            }
          </tbody>
        </table>

      </div>
    </div>
    <Footer />
  </div>
));

App.propTypes = {
  repos: PropTypes.observableArray,
  addRepo: React.PropTypes.func.isRequired,
  addRepos: React.PropTypes.func.isRequired,
  removeRepo: React.PropTypes.func.isRequired
};

export default App;
