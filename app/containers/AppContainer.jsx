import React, { Component } from 'react';
// import { PropTypes } from 'mobx-react';
import App from '../components/App';

class AppContainer extends Component {
  constructor() {
    super();
    this.addRepo = this.addRepo.bind(this);
  }

  componentDidMount() {
    if (this.props.appState.repos.length) {
      this.props.appState.repos.forEach((repo, i) => this.props.appState.fetchRepoData(repo, i))
    }
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

    this.props.appState.addRepo(repoToAdd);
  }

  render() {
    return (
      <App repos={this.props.appState.repos} addRepo={this.addRepo} />
    );
  }
}

// AppContainer.propTypes = {
//   appState: PropTypes.observableObject
// };

export default AppContainer;
