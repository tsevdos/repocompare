import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    textAlign: "center"
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Loader = ({ classes }) => (
  <Card>
    <CardContent className={classes.root}>
      <CircularProgress className={classes.progress} size={50} />
      <Typography component="p">Loading...</Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(Loader);
