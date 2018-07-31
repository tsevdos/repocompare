import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import withUser from "HOC/withUser.jsx";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Header from "./Header";

class HeaderContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    user: PropTypes.object,
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
  };

  state = {
    anchorEl: null
  };

  handleIconClick = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleGoToURLAndCloseMenu = (url) => {
    window.open(url, "_blank");
    this.setState({ anchorEl: null });
  }

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <Header
        {...this.props}
        anchorEl={anchorEl}
        handleIconClick={this.handleIconClick}
        handleCloseMenu={this.handleCloseMenu}
        handleGoToURLAndCloseMenu={this.handleGoToURLAndCloseMenu}
        location={location}
      />
    );
  }
}

export default withRouter(withUser(withStyles(styles)(HeaderContainer)));
