import React from "react";
import { ShareButtons } from "react-share";

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton
} = ShareButtons;

const aboutDivStyles = {
  margin: "1em 0",
  padding: "0 24px"
};

const shareButtonStyles = {
  display: "inline-block",
  marginRight: "10px"
};

const About = () =>
  <div style={aboutDivStyles}>
    <h2>About</h2>
    <p>
      RepoCompare is a pet project made with love by{" "}
      <a target="_blank" rel="noopener noreferrer" href="http://tsevdos.me">
        John Tsevdos
      </a>. Feel free to{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tsevdos/repocompare"
      >
        contribute
      </a>{" "}
      or request{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/tsevdos"
      >
        a feature
      </a>.
    </p>
    <h2>How to use</h2>
    <p>
      Just search and add as many Github repositories as you like using the{" "}
      <code>username/repository name</code> pattern on the search form. Then
      compare the repos with ease on things that matter such as stars, forks,
      open issues and other helpful details!
    </p>
    <h2>Share</h2>
    <FacebookShareButton url="http://repocompare.io" style={shareButtonStyles}>
      <a href="#facebook" style={{ color: "#3b5998" }}>
        Facebook
      </a>
    </FacebookShareButton>
    <TwitterShareButton
      title="Compare Github repositories"
      via="tsevdos"
      url="http://repocompare.io"
      style={shareButtonStyles}
    >
      <a href="#twitter" style={{ color: "#00b6f1" }}>
        Twitter
      </a>
    </TwitterShareButton>
    <GooglePlusShareButton
      url="http://repocompare.io"
      style={shareButtonStyles}
    >
      <a href="#googleplus" style={{ color: "#df4a32" }}>
        Google+
      </a>
    </GooglePlusShareButton>
    <RedditShareButton
      title="Compare Github repositories"
      url="http://repocompare.io"
      style={shareButtonStyles}
    >
      <a href="#reddit" style={{ color: "#ff5700" }}>
        Reddit
      </a>
    </RedditShareButton>
  </div>;

export default About;
