import React from 'react';
import { observer, PropTypes } from 'mobx-react';

import Header from './Header';
import Form from './Form';
import RemoveAllBtn from './RemoveAllBtn';
import RepoWrapper from './RepoWrapper';
import Footer from './Footer';

// import DevTools from 'mobx-react-devtools';

const App = observer(({ repos, addRepo, removeRepo, removeAllRepos }) =>
(
  <div>
    <Header />
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
  removeRepo: React.PropTypes.func.isRequired
};

export default App;
