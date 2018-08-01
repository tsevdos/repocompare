import { graphql } from "react-apollo";
import repositoryDetails from "queries/repositoryDetails.gql";
import CardWrapper from "./CardWrapper";

export default graphql(repositoryDetails, {
  options: (props) => ({
    variables: {
      owner: props.owner,
      name: props.name
    }
  })
})(CardWrapper);
