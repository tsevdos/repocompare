import React from 'react';
import { observer } from 'mobx-react';
import { PropTypes } from 'mobx-react';

import Header from '../components/Header';
import Form from '../components/Form';
import RepoInfo from '../components/RepoInfo';
import Footer from '../components/Footer';

import DevTools from 'mobx-react-devtools';

const App = observer(({repos, addRepo}) =>
(
  <div>
    <Header />
    <div id="main" className="container">
      <div className="jumbotron">
        <Form addRepo={addRepo} />
      </div>
      <div className="row">
        { repos.map((repo) => <RepoInfo key={repo.id} repo={repo} />) }
      </div>
    </div>
    <Footer copy="I love this job." />
  </div>
));

App.propTypes = {
  repos: PropTypes.observableArray,
  addRepo: React.PropTypes.func.isRequired
};

export default App;
