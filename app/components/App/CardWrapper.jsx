import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import repositoryDetails from "queries/repositoryDetails.gql";
import Loader from "./Loader";
import CardInfo from "./CardInfo";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const cardStyle = {
  margin: "0 0 1.5em"
};

const CardWrapper = ({ data, id, isHighlighted, removeRepo }) => {
  const { loading, error, repository } = data;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Card style={cardStyle}>
        <CardTitle title="Error" />
        <CardText>
          Repository {`${id}`} cannot be found! Please ensure it exists!
        </CardText>
        <CardActions>
          <FlatButton
            label="Remove Card"
            onClick={removeRepo}
            secondary={true}
          />
          <br style={{ clear: "both" }} />
        </CardActions>
      </Card>
    );
  }

  return (
    <CardInfo
      repository={repository}
      isHighlighted={isHighlighted}
      removeRepo={removeRepo}
    />
  );
};

CardWrapper.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    repository: PropTypes.object
  }).isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default graphql(repositoryDetails, {
  options: props => ({
    variables: {
      owner: props.owner,
      name: props.name
    }
  })
})(CardWrapper);
