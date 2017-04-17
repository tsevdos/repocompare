import React from 'react'

const footerStyle = {
  margin: '2em 0 0',
  padding: '0 1em'
}

const Footer = () =>
(
  <footer style={footerStyle}>
    <p>
      Like this project? Then feel to <a target="_blank" rel="noopener noreferrer" href="https://github.com/tsevdos/repocompare">contribute</a> or
      drop me a <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tsevdos">tweet</a>!
    </p>
  </footer>
)

export default Footer
