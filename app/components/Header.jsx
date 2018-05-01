/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import FlatButton from "material-ui/FlatButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import withUser from "HOC/withUser.jsx";

const flexListContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0
};
const logoutLink = {
  color: "#fff",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline"
  }
};

const logoutListItem = { textAligh: "right", color: "#fff" };
const avatarParagraph = { margin: "0 1em 0 0" };

const loginIcon = (user, loginUser, logoutUser) => {
  if (user) {
    return (
      <List style={flexListContainer}>
        <ListItem
          disabled={true}
          style={logoutListItem}
          rightAvatar={<Avatar src={user.photoURL} />}
          primaryText={
            <p style={avatarParagraph}>
              Hello, <strong>{user.displayName || user.email}</strong>&nbsp; [
              <a href="#" onClick={logoutUser} style={logoutLink}>
                Logout
              </a>
              ]
            </p>
          }
        />
      </List>
    );
  }

  return (
    <FlatButton
      label="Login"
      onClick={loginUser}
      icon={<FontIcon className="material-icons">person</FontIcon>}
    />
  );
};

const Header = ({ location, user, loginUser, logoutUser }) => (
  <AppBar
    title="RepoCompare"
    className="appbar"
    iconElementLeft={
      <IconButton
        containerElement={
          <Link to={{ pathname: "/", search: location.search }} />
        }
        touch={true}
      >
        <FontIcon className="material-icons">home</FontIcon>
      </IconButton>
    }
    iconElementRight={loginIcon(user, loginUser, logoutUser)}
  >
    <IconMenu
      iconButtonElement={
        <IconButton style={{ margin: "7px 0 0" }} touch={true}>
          <FontIcon color="white" className="material-icons">
            more_vert
          </FontIcon>
        </IconButton>
      }
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      targetOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <MenuItem
        containerElement={
          <Link to={{ pathname: "/about", search: location.search }} />
        }
        primaryText="About"
      />
      <MenuItem
        href="https://github.com/tsevdos/repocompare"
        target="_blank"
        primaryText="Github"
      />
    </IconMenu>
  </AppBar>
);

export default withUser(withRouter(Header));
