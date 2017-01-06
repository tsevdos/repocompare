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
    expect(this.bootstrap.username).toBe('twbs');
    expect(this.bootstrap.reponame).toBe('bootstrap');
    expect(this.bootstrap.isFetching).toBe(true);
    expect(this.bootstrap.animate).toBe(false);
    expect(this.bootstrap.data).toBe(null);
    expect(this.bootstrap.repoNameFull).toBe('twbs/bootstrap');
  });

  it('#fetchData', function() {
    jest.useFakeTimers();
    const fetchData = jest.fn().mockImplementation(() => {
      setTimeout(() => { // Fake API rsponse
        this.bootstrap.isFetching = false;
        this.bootstrap.data = {};
      }, 1000);
    });
    fetchData();
    jest.runAllTimers();

    expect(this.bootstrap.isFetching).toEqual(false);
    expect(this.bootstrap.data).toEqual({});
  });

  it('#hightlight', function() {
    this.bootstrap.hightlight();
    expect(this.bootstrap.animate).toEqual(true);
    jest.runAllTimers();
    expect(this.bootstrap.animate).toEqual(false);
  });
});
