import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  FacebookShareButton, GooglePlusShareButton,
  TwitterShareButton, RedditShareButton
} from "react-share";

const aboutDivStyles = {
  margin: "1em 0",
  padding: "0 24px"
};

const shareContainerStyles = {
  display: "inline-block",
  marginRight: "10px"
};

const shareLink = {
  fontWeight: "bold",
  textDecoration: "none"
};

const About = () => (
  <div style={aboutDivStyles}>
    <Typography variant="title" gutterBottom>About</Typography>
    <Typography paragraph gutterBottom>
      RepoCompare is a pet project made with love by&nbsp;
      <a target="_blank" rel="noopener noreferrer" href="http://tsevdos.me">
        John Tsevdos
      </a>. Feel free to&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tsevdos/repocompare"
      >
        contribute
      </a>&nbsp;
      or request &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/tsevdos"
      >
        a feature
      </a>.
    </Typography>
    <Typography variant="title" gutterBottom>How to use</Typography>
    <Typography paragraph gutterBottom>
      Just search and add as many Github repositories as you like using the&nbsp;
      <code>username/repository name</code> pattern on the search form. Then
      compare the repos with ease on things that matter such as stars, forks,
      open issues and other helpful details!
    </Typography>
    <Typography variant="title" gutterBottom>Share</Typography>
    <FacebookShareButton url="http://repocompare.io" style={shareContainerStyles}>
      <a href="#facebook" style={Object.assign({ color: "#3b5998" }, shareLink)}>
        Facebook
      </a>
    </FacebookShareButton>
    <TwitterShareButton
      title="Compare Github repositories"
      via="tsevdos"
      url="http://repocompare.io"
      style={shareContainerStyles}
    >
      <a href="#twitter" style={Object.assign({ color: "#00b6f1" }, shareLink)}>
        Twitter
      </a>
    </TwitterShareButton>
    <GooglePlusShareButton
      url="http://repocompare.io"
      style={shareContainerStyles}
    >
      <a href="#googleplus" style={Object.assign({ color: "#df4a32" }, shareLink)}>
        Google+
      </a>
    </GooglePlusShareButton>
    <RedditShareButton
      title="Compare Github repositories"
      url="http://repocompare.io"
      style={shareContainerStyles}
    >
      <a href="#reddit" style={Object.assign({ color: "#ff5700" }, shareLink)}>
        Reddit
      </a>
    </RedditShareButton>
  </div>
);

export default About;
