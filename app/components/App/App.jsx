import React from 'react'
import { AutoCompleteContainer, TableContainer } from 'containers'

const divStyle = {
  padding: '0 1em'
}

const App = () =>
(
  <div style={divStyle}>
    <AutoCompleteContainer />
    <div className="table-responsive">
      <TableContainer />
    </div>
  </div>
)

export default App
