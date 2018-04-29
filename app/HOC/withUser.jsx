import React, { Component } from "react";
import firebase, { auth, provider } from "lib/firebase";
import Cookies from "js-cookie";

function withUser(WrappedComponent) {
  return class UserComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { user: null };
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user });
          window.user = user;
          window.token = Cookies.get("token");
          // console.log(Cookies.get("token"));
          // console.log(user);
        }
      });
    }

    loginUser = () => {
      provider.addScope("public_repo");
      auth.signInWithPopup(provider).then(result => {
        Cookies.set("token", result.credential.accessToken);
        this.setState({ user: result.user });
      });
    };

    logoutUser = () => {
      auth.signOut().then(() => {
        this.setState({ user: null });
        Cookies.remove("token");
      });
    };

    render() {
      return (
        <WrappedComponent
          user={this.state.user}
          loginUser={this.loginUser}
          logoutUser={this.logoutUser}
          {...this.props}
        />
      );
    }
  };
}

export default withUser;
