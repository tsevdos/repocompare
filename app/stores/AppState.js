import { observable } from 'mobx';

class AppState {
  @observable repos = [
    {
      id: 1,
      user: 'twbs',
      repo: 'bootstrap'
    }
  ];

}

export default AppState;
