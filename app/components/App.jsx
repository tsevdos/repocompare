import React from 'react';
import { observer } from 'mobx-react';

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
        <Form appState={appState} addRepo={addRepo} />
      </div>

      <div className="row">
        { repos.map((repo, i) => <RepoInfo key={`${i}`} repoData={repo.data} />) }
      </div>

    </div>

    <Footer copy="I love this job." />

  </div>
));

App.propTypes = {
  appState: React.PropTypes.array.isRequired,
  addRepo: React.PropTypes.func.isRequired
};

export default App;
