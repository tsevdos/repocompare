import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import repositoryDetails from "queries/repositoryDetails.gql";
import Loader from "./Loader";
import CardInfo from "./CardInfo";
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";

const titleStyle = {
  paddingTop: "0"
};

const cardStyle = {
  margin: "0 0 1.5em"
};

const highlightedCardStyle = {
  background: "#b3e5fc",
  margin: "0 0 1.5em"
};

const cardTextStyle = {
  paddingTop: 0,
  paddingBottom: 0
};

const listStyle = {
  padding: 0
};

const listItemStyle = {
  padding: "5px 0",
  fontSize: "1.2em"
};

const CardWrapper = ({ data, owner, name, removeRepo }) => {
  const { loading, error, repository } = data;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Card style={cardStyle}>
        <CardTitle title="Error" />
        <CardText>
          Repository {`${owner}/${name}`} cannot be found! Please ensure that it exists!
        </CardText>
        <CardActions>
          <FlatButton
            label="Remove Card"
            onTouchTap={e => console.log('remove repo')}
            secondary={true}
          />
          <br style={{ clear: "both" }} />
        </CardActions>
      </Card>
    );
  }

  return (<CardInfo repository={repository} removeRepo={removeRepo} />);
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
  options: (props) => ({
    variables: {
      owner: props.owner,
      name: props.name
    }
  })
})(CardWrapper);
