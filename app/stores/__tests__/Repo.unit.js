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
});
