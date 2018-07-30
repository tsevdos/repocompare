import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { GitHubAutoComplete, Cards } from "components";
import withUser from "HOC/withUser.jsx";
import { mapReposToURL } from "lib/helpers/urlHistory";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
      repos: []
    };

    this.searchRepositories = this.searchRepositories.bind(this);
    this.removeRepo = this.removeRepo.bind(this);
    this.handleReposChange = this.handleReposChange.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    if (history.location.search === "") {
      history.push({
        pathname: "/",
        search: "?repos=tsevdos/repocompare"
      });
    }
    const reposOnUrlQuery = this._getReposOnSearchQueryUrl().map(name =>
      this._getRepo(name)
    );
    this.setState({ repos: reposOnUrlQuery });
  }

  searchRepositories(query) {
    this.setState({ searchterm: query });
  }

  removeRepo(repoId) {
    const newRepos = this.state.repos.filter(repo => repo.id !== repoId);
    this.setState({ repos: newRepos });

    mapReposToURL(newRepos, this.props.history);
  }

  handleReposChange(repos) {
    const newRepos = repos.map(({ value }) => this._getRepo(value));
    this.setState({ repos: newRepos });
    mapReposToURL(newRepos, this.props.history);
  }

  markRepoHighlighted(repoIndex) {
    this._toggleRepoHighlight(repoIndex);
    setTimeout(() => this._toggleRepoHighlight(repoIndex), 1000);
  }

  _getRepo(repoStr) {
    const owner = repoStr.split("/")[0];
    const name = repoStr.split("/")[1];

    return { id: repoStr, owner, name, isHighlighted: false };
  }

  _getReposOnSearchQueryUrl() {
    const { history } = this.props;
    const urlQuery = history.location.search.substr(1).replace('repos=', '');

    return urlQuery.split(",");
  }

  _toggleRepoHighlight(repoIndex) {
    const newRepos = this.state.repos.slice();
    newRepos[repoIndex].isHighlighted = !newRepos[repoIndex].isHighlighted;
    this.setState({ repos: newRepos });
  }

  render() {
    const { searchterm, repos } = this.state;
    const { isLoggedIn, loginUser, classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
        {
          (!isLoggedIn) ?
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
          :
            <Grid item xs={12}>
              <GitHubAutoComplete
                repos={repos}
                searchterm={searchterm}
                onUpdateInput={this.searchRepositories}
                onSelectChange={this.handleReposChange}
              />
              <Divider className={classes.divider} />
              <Cards repos={repos} removeRepo={this.removeRepo} />
            </Grid>
        }
        </Grid>
      </div>
    );
  }
}

export default withRouter(withUser(withStyles(styles)(AppContainer)));
