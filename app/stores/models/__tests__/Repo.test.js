import Repo from '../Repo';

describe('Repo', () => {
  beforeEach(function() {
    this.bootstrap = new Repo(
      {
        username: 'twbs',
        reponame: 'bootstrap'
      }
    );
  });

  it('must have correct attributes', function() {
    expect(this.bootstrap.id).toEqual('twbs/bootstrap');
    expect(this.bootstrap.isFetching).toBe(true);
    expect(this.bootstrap.animate).toBe(false);
    expect(this.bootstrap.hasError).toBe(false);
  });

  it('#hightlight', function() {
    jest.useFakeTimers();
    this.bootstrap.hightlight();
    expect(this.bootstrap.animate).toEqual(true);
    jest.runAllTimers();
    expect(this.bootstrap.animate).toEqual(false);
  });
});
