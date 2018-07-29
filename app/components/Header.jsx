import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import withUser from "HOC/withUser.jsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  avatarContainer: {
    marginRight: theme.spacing.unit
  },
  avatar: {
    float: "right",
    marginLeft: theme.spacing.unit
  }
});


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };

    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleGoToURLAndCloseMenu = this.handleGoToURLAndCloseMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }

  handleIconClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleGoToURLAndCloseMenu(url) {
    window.open(url, "_blank");
    this.setState({ anchorEl: null });
  }

  handleCloseMenu() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { location, user, loginUser, logoutUser, classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              component={Link}
              to={{ pathname: "/", search: location.search }}
              className={classes.menuButton}
              color="inherit"
              aria-label="Home"
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              RepoCompare
            </Typography>
            {
              user ?
                  <div className={classes.avatarContainer}>
                    <Button color="inherit" onClick={logoutUser}>Logout</Button>
                    <Avatar className={classes.avatar} alt={user.displayName || user.email} src={user.photoURL} />
                  </div>
                :
                  <Button color="inherit" onClick={loginUser}>
                    Login
                    <PersonIcon className={classes.rightIcon} />
                  </Button>
            }
            <IconButton color="inherit" aria-label="More options" onClick={this.handleIconClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleCloseMenu}>
              <MenuItem
                component={Link}
                to={{pathname: "/about", search: location.search}}
                onClick={this.handleCloseMenu}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => this.handleGoToURLAndCloseMenu("https://github.com/tsevdos/repocompare")}
              >
                Github
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withUser(withStyles(styles)(Header)));
