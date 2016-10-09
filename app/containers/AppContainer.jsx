import React, { Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';

import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

import { githubAPIUrl } from '../config/config';

import DevTools from 'mobx-react-devtools';

@observer
class AppContainer extends Component {

  componentDidMount() {
    this.fetchRepoData();
  }

  fetchRepoData(repo) {
    console.log(this.props.appState.repos[0]);

    axios.get(`${githubAPIUrl}repos/mzabriskie/axios/stats/contributors`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="jumbotron">
            <Form />
          </div>
        </div>

        <div className="container" id="main">
          <div className="row">
            <div className="col-md-4">
              <h2>RepoName</h2>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
