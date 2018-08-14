import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import GitHubAutoComplete from "components/GitHubAutoComplete";
import Cards from "components/Cards/Cards";
import User from "containers/User/User";
import styles from "./styles";

const App = ({
  classes, searchterm, repos,
  searchRepositories, handleReposChange, removeRepo
}) => (
  <div className={classes.root}>
    <Grid container spacing={16}>
      <User>
        {

          (_user, isLoggedIn, loginUser) => {

            if (isLoggedIn) {
              return (
                <Grid item xs={12}>
                  <GitHubAutoComplete
                    repos={repos}
                    searchterm={searchterm}
                    onUpdateInput={searchRepositories}
                    onSelectChange={handleReposChange}
                  />
                  <Divider className={classes.divider} />
                  <Cards repos={repos} removeRepo={removeRepo} />
                </Grid>
              )
            }

            return (
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      Login to Github
                    </Typography>
                    <Typography gutterBottom variant="subheading" component="p">
                      Please login to Github and start comparing repositories
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="primary" onClick={loginUser}>Login</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          }
        }
      </User>
    </Grid>
  </div>
);

App.propTypes = {
  searchterm: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired
    })
  ).isRequired,
  classes: PropTypes.object.isRequired,
  searchRepositories: PropTypes.func.isRequired,
  handleReposChange: PropTypes.func.isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default withStyles(styles)(App);
