import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import CardInfo from "./CardInfo";

const CardWrapper = ({ repo, removeRepo }) => {
  return repo.isFetching
    ? <Loader />
    : <CardInfo repo={repo} removeRepo={removeRepo} />;
};

CardWrapper.propTypes = {
  repo: PropTypes.object.isRequired,
  removeRepo: PropTypes.func.isRequired
};

export default CardWrapper;
