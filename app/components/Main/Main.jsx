import React, { PropTypes } from 'react'
import { Header, Footer } from 'components'

const MainContainer = ({ children, location }) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>
)

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default MainContainer
