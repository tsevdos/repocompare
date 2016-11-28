import React from 'react';

const Header = ({ addRepos }) =>
(
  <nav className="navbar navbar-default">
    <div className="container">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="https://tsevdos.github.io/repocompare/">RepoCompare</a>
      </div>

      <div className="collapse navbar-collapse" id="main-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PHP <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a data-repos="phpFrameworks" href="#" onClick={addRepos}>Frameworks</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </nav>
);

Header.propTypes = {
  addRepos: React.PropTypes.func.isRequired
};

export default Header;
