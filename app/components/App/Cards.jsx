import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardText } from "material-ui/Card";
import { Row, Col } from "react-flexbox-grid";
import CardWrapper from "./CardWrapper";

const Cards = ({ repos, removeRepo }) => {
  return (
    <Row>
      {repos.length ? (
        repos.map(repo => (
          <Col xs={12} sm={6} md={4} lg={4} key={repo.id}>
            <CardWrapper
              owner={repo.owner}
              name={repo.name}
              isHighlighted={repo.isHighlighted}
              removeRepo={removeRepo}
            />
          </Col>
        ))
      ) : (
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card>
            <CardHeader title="No repositories" />
            <CardText>
              Please add repositories using the above autocomplete.
            </CardText>
          </Card>
        </Col>
      )}
    </Row>
  );
};

Cards.propTypes = {
  repos: PropTypes.array.isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default Cards;
