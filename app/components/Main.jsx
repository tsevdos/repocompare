import React from "react";
import PropTypes from "prop-types";
import { Header } from "components";

const MainContainer = ({ children }) =>
  <div>
    <Header />
    {children}
  </div>;

MainContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainContainer;
