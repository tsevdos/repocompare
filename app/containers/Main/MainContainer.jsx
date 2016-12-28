import React, { PropTypes } from 'react';
import { HeaderContainer } from '../../containers';
import { Footer } from '../../components';

const MainContainer = ({ children, location }) => (
  <div>
    <HeaderContainer currentPathName={location.pathname} />
    <main id="main" className="container">
      {children}
    </main>
    <Footer />
  </div>
);

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default MainContainer;
