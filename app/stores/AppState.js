import { observable } from 'mobx';

class AppState {
  @observable repos = [
    {
      id: 1,
      user: 'twbs',
      name: 'bootstrap',
      data: null
    },
    {
      id: 2,
      user: 'tsevdos',
      name: 'greek-in-tech',
      data: null
    },
    {
      id: 3,
      user: 'MostlyAdequate',
      name: 'mostly-adequate-guide',
      data: null
    }
  ];

}

export default AppState;
