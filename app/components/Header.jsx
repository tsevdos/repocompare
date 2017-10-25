import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

const moreButtonStyle = {
  margin: "7px 0 0"
};

const Header = ({ location }) => (
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
  >
    <IconMenu
      iconButtonElement={
        <IconButton style={moreButtonStyle} touch={true}>
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

export default withRouter(Header);
