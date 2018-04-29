import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from "typography";
import githubTheme from "typography-theme-github";
import injectTapEventPlugin from "react-tap-event-plugin";
import apolloClient from "./ApolloClient";
import AppContainer from "containers/AppContainer";
import HeaderContainer from "containers/HeaderContainer";
import { About } from "components";

const typography = new Typography(githubTheme);
typography.injectStyles();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <MuiThemeProvider>
      <HashRouter>
        <div>
          <HeaderContainer />
          <Route exact path="/" component={AppContainer} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
