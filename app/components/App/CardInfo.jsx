import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";

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

const listIconStyle = {
  fontSize: "1em"
};

const CardInfo = ({ repository, isHighlighted, removeRepo }) => {
  const {
    owner,
    nameWithOwner,
    description,
    stargazers,
    forks,
    issues,
    watchers,
    url,
    homepageUrl,
    diskUsage,
    licenseInfo,
    languages
  } = repository;

  return (
    <Card style={isHighlighted ? highlightedCardStyle : cardStyle}>
      <CardHeader
        title={owner.login}
        subtitle={owner.__typename}
        avatar={owner.avatarUrl}
        style={{ cursor: "pointer" }}
        onClick={() => window.open(owner.url)}
      />
      <CardTitle
        title={nameWithOwner}
        subtitle={description}
        style={titleStyle}
      />
      <CardText style={cardTextStyle}>
        <List style={listStyle}>
          <ListItem style={listItemStyle} disabled={true}>
            Stars: <strong>{stargazers.totalCount.toLocaleString()}</strong>
          </ListItem>
          <ListItem style={listItemStyle} disabled={true}>
            Forks: <strong>{forks.totalCount.toLocaleString()}</strong>
          </ListItem>
          <ListItem style={listItemStyle} disabled={true}>
            Open Issues: <strong>{issues.totalCount.toLocaleString()}</strong>
          </ListItem>
          <ListItem style={listItemStyle} disabled={true}>
            Subscribers: <strong>{watchers.totalCount.toLocaleString()}</strong>
          </ListItem>

          <ListItem style={listItemStyle} disabled={true}>
            Repository file size: <strong>{diskUsage} KB</strong>
          </ListItem>
          {licenseInfo.nickname && (
            <ListItem style={listItemStyle} disabled={true}>
              License: <strong>{licenseInfo.nickname}</strong>
            </ListItem>
          )}

          <ListItem style={listItemStyle} disabled={true}>
            Languages:&nbsp;
            {languages.nodes.map(language => (
              <span key={language.name}>
                <FontIcon
                  className="material-icons"
                  color={language.color}
                  style={listIconStyle}
                >
                  lens
                </FontIcon>
                &nbsp;<strong>{language.name}</strong>&nbsp;
              </span>
            ))}
          </ListItem>
        </List>
      </CardText>

      <CardActions>
        <FlatButton
          href={url}
          label="Repository"
          target="_blank"
          primary={true}
        />
        {homepageUrl && (
          <FlatButton
            href={homepageUrl}
            label="Site"
            target="_blank"
            primary={true}
          />
        )}
        <FlatButton
          label="Remove Card"
          onTouchTap={e => removeRepo(nameWithOwner)}
          secondary={true}
        />
      </CardActions>
    </Card>
  );
};

CardInfo.propTypes = {
  repository: PropTypes.object.isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default withRouter(CardInfo);
