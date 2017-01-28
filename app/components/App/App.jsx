import React from 'react'
import { FormContainer, TableContainer } from 'containers'

const App = () =>
(
  <div>
    <div className="jumbotron">
      <FormContainer />
    </div>
    <div className="table-responsive">
      <TableContainer />
    </div>
  </div>
)

export default App
