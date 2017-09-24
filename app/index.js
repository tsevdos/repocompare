import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import store from "redux/store";
import routers from "constants/routes";
import Typography from "typography";
import githubTheme from "typography-theme-github";

const typography = new Typography(githubTheme);
typography.injectStyles();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {routers}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
);
