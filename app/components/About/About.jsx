import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {
  FacebookShareButton, GooglePlusShareButton,
  TwitterShareButton, RedditShareButton
} from "react-share";

const About = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="title" gutterBottom>About</Typography>
    <Typography paragraph gutterBottom>
      RepoCompare is a pet project made with love by&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://tsevdos.me"
        className={classes.normalLink}
      >
        John Tsevdos
      </a>. Feel free to&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tsevdos/repocompare"
        className={classes.normalLink}
      >
        contribute
      </a> or request&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/tsevdos"
        className={classes.normalLink}
      >
        a feature
      </a>.
    </Typography>
    <Typography variant="title" gutterBottom>How to use</Typography>
    <Typography paragraph gutterBottom>
      Just search and add as many Github repositories as you like using the
      &nbsp;<code>username/repository name</code> pattern on the search form.
      Then compare the repos with ease on things that matter such as stars,
      forks, open issues and other helpful details!
    </Typography>
    <Typography variant="title" gutterBottom>Share</Typography>
    <FacebookShareButton
      url="http://repocompare.io"
      className={classes.shareIcon}
    >
      <a
        href="#facebook"
        className={classes.shareIconLink}
        style={{ color: "#3b5998" }}
      >
        Facebook
      </a>
    </FacebookShareButton>
    <TwitterShareButton
      title="Compare Github repositories"
      via="tsevdos"
      url="http://repocompare.io"
      className={classes.shareIcon}
    >
      <a
        href="#twitter"
        className={classes.shareIconLink}
        style={{ color: "#00b6f1" }}
      >
        Twitter
      </a>
    </TwitterShareButton>
    <GooglePlusShareButton
      url="http://repocompare.io"
      className={classes.shareIcon}
    >
      <a
        href="#googleplus"
        className={classes.shareIconLink}
        style={{ color: "#df4a32" }}
      >
        Google+
      </a>
    </GooglePlusShareButton>
    <RedditShareButton
      title="Compare Github repositories"
      url="http://repocompare.io"
      className={classes.shareIcon}
    >
      <a
        href="#reddit"
        className={classes.shareIconLink}
        style={{ color: "#ff5700" }}
      >
        Reddit
      </a>
    </RedditShareButton>
  </div>
);

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default About;
