import { observable, action } from 'mobx';
import { fetchData } from 'helpers/api';

export default class Repo {
  @observable isFetching;
  @observable animate;
  @observable hasError;

  constructor({ username = '', reponame = '' } = {}) {
    this.id = `${username}/${reponame}`;
    this.isFetching = true;
    this.animate = false;
    this.hasError = false;
    this.data = null;
    this.setData();
  }

  @action setData() {
    this.data = fetchData(this);
  }

  // TODO: Use more React-way to do the animation like ReactCSSTransitionGroup
  @action hightlight() {
    this.animate = true;
    setTimeout(() => (this.animate = false), 1000);
  }

}
