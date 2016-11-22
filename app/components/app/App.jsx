import React from 'react';
import { observer, PropTypes } from 'mobx-react';

import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Form from './Form';
import RemoveAllBtn from './RemoveAllBtn';
import RepoWrapper from './RepoWrapper';

// import DevTools from 'mobx-react-devtools';

const App = observer(({ repos, addRepo, addRepos, removeRepo, removeAllRepos }) =>
(
  <div>
    <Header addRepos={addRepos} />
    <div id="main" className="container">
      <div className="jumbotron">
        <Form addRepo={addRepo} />
      </div>
      <RemoveAllBtn repos={repos} removeAllRepos={removeAllRepos} />
      <div className="row">
        { repos.map((repo) => <RepoWrapper key={repo.id} repo={repo} removeRepo={removeRepo} />) }
      </div>
    </div>
    <Footer copy="I love this job." />
  </div>
));

App.propTypes = {
  repos: PropTypes.observableArray,
  addRepo: React.PropTypes.func.isRequired,
  addRepos: React.PropTypes.func.isRequired,
  removeRepo: React.PropTypes.func.isRequired
};

export default App;
