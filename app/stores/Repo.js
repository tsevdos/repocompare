import { observable, action } from 'mobx';
import axios from 'axios';
import config from '../config/config';

export default class Repo {
  @observable username;
  @observable reponame;
  @observable isFetching;
  @observable data;

  constructor({username = '', reponame = ''} = {}) {
    this.id = new Date().valueOf();
    this.username = username;
    this.reponame = reponame;
    this.isFetching = true;
    this.data = null;
    this.fetchData();
  }

  @action fetchData() {

    axios.get(`${config.githubAPIUrl}/repos/${this.username}/${this.reponame}`)
      .then((response) => {
        this.data = response.data;
        this.isFetching = false;
      })
      .catch((error) => {
        console.log(error);
        this.isFetching = false;
        console.log('Couldnt find repo');
      });
  }

}
