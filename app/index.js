import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from "typography";
import githubTheme from "typography-theme-github";
import injectTapEventPlugin from "react-tap-event-plugin";
import store from "redux/store";
import AppContainer from "containers/AppContainer";
import { About, Header } from "components";

const typography = new Typography(githubTheme);
typography.injectStyles();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
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
  </Provider>,
  document.getElementById("app")
);
