import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const Loader = ({ classes }) => (
  <Card>
    <CardContent className={classes.root}>
      <CircularProgress className={classes.progress} size={50} />
      <Typography component="p">Loading...</Typography>
    </CardContent>
  </Card>
);

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Loader;
