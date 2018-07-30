import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import repositoryDetails from "queries/repositoryDetails.gql";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import CardInfo from "./CardInfo";

const CardWrapper = ({ data, id, isHighlighted, removeRepo }) => {
  const { loading, error, repository } = data;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Error
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            Repository {`${id}`} cannot be found! Please ensure it exists!
          </Typography>
          <CardActions>
            <Button color="secondary" onClick={removeRepo}>Remove Card</Button>
          </CardActions>
        </CardContent>
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
