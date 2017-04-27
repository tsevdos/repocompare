import React from 'react'

const aboutDivStyles = {
  margin: '1em 0',
  padding: '0 24px'
}

const About = () =>
(
  <div style={aboutDivStyles}>
    <h2>About</h2>
    <p>
      RepoCompare is a pet project made with love by <a target="_blank" rel="noopener noreferrer" href="http://tsevdos.me">John Tsevdos</a>. Feel free to <a target="_blank" rel="noopener noreferrer" href="https://github.com/tsevdos/repocompare">contribute</a> or request <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tsevdos">a feature</a>.
    </p>
    <h2>How to use</h2>
    <p>
      Just search and add as many Github repositories as you like using the <code>username/repository name</code> pattern on the search form. Then compare the repos with ease on things that matter such as stars, forks, open issues and other helpful details!
    </p>
  </div>
)

export default About
