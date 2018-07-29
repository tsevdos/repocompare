import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardWrapper from "./CardWrapper";

const Cards = ({ repos, removeRepo }) => {
  return (
    <Grid container spacing={16}>
    {
      repos.length ?
        repos.map(repo => (
          <Grid item xs={12} sm={6} md={4} key={repo.id}>
            <CardWrapper
              owner={repo.owner}
              name={repo.name}
              isHighlighted={repo.isHighlighted}
              removeRepo={() => removeRepo(repo.id)}
            />
          </Grid>
        ))
      :
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                No repositories
              </Typography>
              <Typography gutterBottom variant="subheading" component="p">
                Please add repositories using the above autocomplete.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    }
    </Grid>
  );
};

Cards.propTypes = {
  repos: PropTypes.array.isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default Cards;
