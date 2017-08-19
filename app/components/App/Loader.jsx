import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

const cardTextStyle = {
  textAlign: "center"
};

const Loader = () =>
  <Card>
    <CardTitle title="Loading..." />
    <CardText style={cardTextStyle}>
      <CircularProgress size={80} thickness={5} />
    </CardText>
  </Card>;

export default Loader;
