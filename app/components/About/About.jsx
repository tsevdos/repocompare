import React from 'react';
import { marginBottom } from './About.css';

const About = () =>
(
  <div>
    <h1>RepoCompare</h1>

    <hr />

    <h2>About</h2>

    <p className={`lead ${marginBottom}`}>
      RepoCompare is a pet project made with love by <a target="_blank" rel="noopener noreferrer" href="http://tsevdos.me">John Tsevdos</a>. As you can see my design skills are not so great, so feel free to <a target="_blank" rel="noopener noreferrer" href="https://github.com/tsevdos/repocompare">contribute</a> you awesome designs and styles!
    </p>

    <h2>How to use</h2>

    <p className={`lead ${marginBottom}`}>
      Just search and add as many Github repositories as you like using the <code>username/repository name</code> pattern on the search form. Then compare the repos with ease on things that matter such as stars, forks, open issues and other helpful details!
    </p>
  </div>
);

export default About;
