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
        <a className="navbar-brand" href="/">RepoCompare</a>
      </div>

      <div className="collapse navbar-collapse" id="main-menu">
        <ul className="nav navbar-nav">

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">JS/Node <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a data-repos="js-frameworks-server" href="#" onClick={addRepos}>Node.js frameworks</a></li>
              <li><a data-repos="js-frameworks-client" href="#" onClick={addRepos}>Client-side frameworks</a></li>
              <li><a data-repos="js-libraries" href="#" onClick={addRepos}>Libraries</a></li>
              <li><a data-repos="js-testing" href="#" onClick={addRepos}>Testing</a></li>
              <li><a data-repos="js-documnetation" href="#" onClick={addRepos}>Documnetation</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ruby <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a data-repos="ruby-frameworks" href="#" onClick={addRepos}>Frameworks</a></li>
              <li><a data-repos="ruby-libraries" href="#" onClick={addRepos}>Libraries</a></li>
              <li><a data-repos="ruby-testing" href="#" onClick={addRepos}>Testing</a></li>
              <li><a data-repos="ruby-documnetation" href="#" onClick={addRepos}>Documnetation</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PHP <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a data-repos="php-frameworks" href="#" onClick={addRepos}>Frameworks</a></li>
              <li><a data-repos="php-libraries" href="#" onClick={addRepos}>Libraries</a></li>
              <li><a data-repos="php-testing" href="#" onClick={addRepos}>Testing</a></li>
              <li><a data-repos="php-documnetation" href="#" onClick={addRepos}>Documnetation</a></li>
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
