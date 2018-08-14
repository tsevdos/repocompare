import { Component } from "react";
import { auth, provider } from "lib/firebase";
import Cookies from "js-cookie";

class User extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  loginUser = () => {
    provider.addScope("public_repo");
    auth.signInWithPopup(provider).then((result) => {
      Cookies.set("token", result.credential.accessToken);
      this.setState({ user: result.user });
    });
  };

  logoutUser = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      this.setState({ user: null });
      Cookies.remove("token");
    });
  };

  render() {
    const isLoggedIn = Boolean(this.state.user && Cookies.get("token"));

    return this.props.children(
      this.state.user, isLoggedIn, this.loginUser, this.logoutUser
    );
  }
}

export default User;
