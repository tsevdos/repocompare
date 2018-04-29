import React, { Component } from "react";
import Header from "components/Header";
import firebase, { auth, provider } from "lib/firebase";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      }
    });
  }

  loginUser = () => {
    provider.addScope("public_repo");

    auth.signInWithPopup(provider).then(result => {
      this.setState({ user: result.user });
    });
  };

  logoutUser = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  };

  render() {
    return (
      <Header
        user={this.state.user}
        loginUser={this.loginUser}
        logoutUser={this.logoutUser}
      />
    );
  }
}

export default HeaderContainer;
