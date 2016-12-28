import React from 'react';
import { PropTypes } from 'mobx-react';
import Form from './Form';
import Table from './Table';

const App = ({ repos, addRepo, removeRepo, removeAllRepos }) =>
(
  <div>
    <div className="jumbotron">
      <Form addRepo={addRepo} />
    </div>
    <div className="table-responsive">
      <Table repos={repos} removeRepo={removeRepo} removeAllRepos={removeAllRepos} />
    </div>
  </div>
);

App.propTypes = {
  repos: PropTypes.observableArray,
  addRepo: React.PropTypes.func.isRequired,
  removeRepo: React.PropTypes.func.isRequired,
  removeAllRepos: React.PropTypes.func.isRequired
};

export default App;
