import React from 'react';

const Footer = ({ copy }) =>
(
  <footer className="footer">
    <div className="container">
      <p className="text-muted">{copy}</p>
    </div>
  </footer>
);

Footer.propTypes = {
  copy: React.PropTypes.string.isRequired
};

export default Footer;
