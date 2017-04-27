import React from 'react'
import { AutoCompleteContainer, CardsContainer } from 'containers'

const divStyle = {
  padding: '0 24px'
}

const App = () =>
(
  <div style={divStyle}>
    <AutoCompleteContainer />
    <CardsContainer />
  </div>
)

export default App
