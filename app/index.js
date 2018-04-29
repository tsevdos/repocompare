import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "lib/apolloClient";
import { HashRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import AppContainer from "containers/AppContainer";
import { About, Header } from "components";
import Cookies from "js-cookie";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const apolloClient = createApolloClient(Cookies.get("token"));

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <MuiThemeProvider>
      <HashRouter>
        <div>
          <Header />
          <Route exact path="/" component={AppContainer} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
