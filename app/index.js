import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import AppContainer from "containers/App";
import Header from "components/Header";
import About from "components/About";
import apolloClient from "lib/apolloClient";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Header />
          <Route exact path="/" component={AppContainer} />
          <Route exact path="/about" component={About} />
        </React.Fragment>
      </MuiThemeProvider>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById("app")
);
