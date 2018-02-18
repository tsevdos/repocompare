import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from "typography";
import githubTheme from "typography-theme-github";
import injectTapEventPlugin from "react-tap-event-plugin";
import apolloClient from "./ApolloClient";
import store from "redux/store";
import AppContainer from "containers/AppContainer";
import { About, Header } from "components";

const typography = new Typography(githubTheme);
typography.injectStyles();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <MuiThemeProvider>
        <HashRouter>
          <div>
            <Header />
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/about" component={About} />
          </div>
        </HashRouter>
      </MuiThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById("app")
);
