import { Component } from "react";
import { auth, provider } from "lib/firebase";

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
      localStorage.setItem("token", result.credential.accessToken);
      this.setState({ user: result.user });
    });
  }

  logoutUser = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      this.setState({ user: null });
      localStorage.removeItem("token");
    });
  }

  render() {
    const isLoggedIn = Boolean(
      this.state.user && localStorage.getItem("token")
    );

    return this.props.children(
      this.state.user, isLoggedIn, this.loginUser, this.logoutUser
    );
  }
}

export default User;
