import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import User from "containers/User/User";

const Header = ({
  location, classes, anchorEl, handleIconClick,
  handleCloseMenu, handleGoToURLAndCloseMenu
}) => {
  const urlQuery = location.hash.split("?")[1];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={Link}
            to={{ pathname: "/", search: `?${urlQuery}` }}
            className={classes.menuButton}
            color="inherit"
            aria-label="Home"
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
          >
            RepoCompare
          </Typography>
          <User>
            {
              (user, isLoggedIn, loginUser, logoutUser) => {
                if (isLoggedIn) {
                  return (
                    <div className={classes.avatarContainer}>
                      <Button color="inherit" onClick={logoutUser}>
                        Logout
                      </Button>
                      <Avatar
                        className={classes.avatar}
                        alt={user.displayName || user.email}
                        src={user.photoURL}
                      />
                    </div>
                  )
                }

                return (
                  <Button color="inherit" onClick={loginUser}>
                    Login
                    <PersonIcon className={classes.rightIcon} />
                  </Button>
                )
              }
            }
          </User>
          <IconButton
            color="inherit"
            aria-label="More options"
            onClick={handleIconClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem
              component={Link}
              to={{ pathname: "/about", search: `?${urlQuery}` }}
              onClick={handleCloseMenu}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={() => handleGoToURLAndCloseMenu("https://github.com/tsevdos/repocompare")}
            >
              Github
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  anchorEl: PropTypes.object,
  handleIconClick: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  handleGoToURLAndCloseMenu: PropTypes.func.isRequired
};

export default Header;
