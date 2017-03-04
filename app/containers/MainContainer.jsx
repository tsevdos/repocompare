import React, { PropTypes } from 'react'
import { Header, Footer } from 'components'

const MainContainer = ({ children, location }) => (
  <div>
    <Header />
    <main id="main" className="container">
      {children}
    </main>
    <Footer />
  </div>
)

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default MainContainer
