import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import CircleIcon from "@material-ui/icons/Lens";

const CardInfo = ({ repository, removeRepo, classes }) => {
  const {
    owner, nameWithOwner, description, stargazers, forks, issues,
    watchers, url, homepageUrl, diskUsage, licenseInfo, languages
  } = repository;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt={owner.login} src={owner.avatarUrl} />}
        title={owner.login}
        subheader={owner.__typename}
        onClick={() => window.open(owner.url)}
        className={classes.cardHeader}
      />

      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {nameWithOwner}
        </Typography>
        <Typography gutterBottom component="p">
          {description}
        </Typography>

        <Divider className={classes.divider} />

        <Typography gutterBottom variant="subheading" component="p">
          Stars: <strong>{stargazers.totalCount.toLocaleString()}</strong>
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
          Forks: <strong>{forks.totalCount.toLocaleString()}</strong>
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
          Open Issues: <strong>{issues.totalCount.toLocaleString()}</strong>
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
          Subscribers: <strong>{watchers.totalCount.toLocaleString()}</strong>
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
          Repository file size: <strong>{diskUsage} KB</strong>
        </Typography>
        {
          licenseInfo.nickname &&
            <Typography gutterBottom variant="subheading" component="p">
              License: <strong>{licenseInfo.nickname}</strong>
            </Typography>
        }
        <Typography gutterBottom variant="subheading" component="p">
          Languages:&nbsp;
          {
            languages.nodes.map(({ name, color }) => (
              <span key={name}>
                <CircleIcon
                  style={{ color: color }}
                  fontSize="inherit"
                />
                &nbsp;<strong>{name}</strong>&nbsp;
              </span>
            ))
          }
        </Typography>

        <CardActions>
          <Button color="primary" href={url} target="_blank">Repository</Button>
          {
            homepageUrl &&
              <Button color="primary" href={homepageUrl} target="_blank" >
                Homepage
              </Button>
          }
          <Button color="secondary" onClick={() => removeRepo(nameWithOwner)}>
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

CardInfo.propTypes = {
  repository: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default CardInfo;
