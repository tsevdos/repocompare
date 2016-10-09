import React, { Component } from 'react';

const Footer = ({ copy } = props) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">{copy}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  copy: React.PropTypes.string
};

export default Footer;
