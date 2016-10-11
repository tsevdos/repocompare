import React, { Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';

import config from '../config/config';

import RepoInfo from '../components/RepoInfo';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

import DevTools from 'mobx-react-devtools';

@observer
class AppContainer extends Component {
  constructor() {
    super();
    this.addRepo = this.addRepo.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props.appState.repos);
  }

  addRepo(e) {
    e.preventDefault();

    const repo = e.target.elements[0].value.trim();
    const user = repo.split('/')[0];
    const name = repo.split('/')[1];
    const id = this.props.appState.repos.length + 1;

    const repoToAdd = {
      id,
      user,
      name,
      data: null
    };

    this.props.appState.repos.push(repoToAdd);
  }

  fetchData(repos) {

    repos.forEach((repo, i) => {
      axios.get(`${config.githubAPIUrl}/repos/${repo.user}/${repo.name}`)
        .then((response) => {
          this.props.appState.repos[i].data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });

  }

  render() {
    return (
      <div>
        <Header />
        <div id="main" className="container">

          <div className="jumbotron">
            <Form appState={this.props.appState} addRepo={this.addRepo} />
          </div>

          <div className="row">
            { this.props.appState.repos.map((repo, i) => <RepoInfo key={`${i}`} repoData={repo.data} />) }
          </div>

        </div>

        <Footer copy="I love this job." />

        <DevTools />
      </div>
    );
  }
}

AppContainer.propTypes = {
  values: React.PropTypes.object
};

export default AppContainer;
