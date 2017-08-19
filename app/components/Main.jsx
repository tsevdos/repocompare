import React, { PropTypes } from "react";
import { Header } from "components";

const MainContainer = ({ children, location }) =>
  <div>
    <Header />
    {children}
  </div>;

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default MainContainer;
