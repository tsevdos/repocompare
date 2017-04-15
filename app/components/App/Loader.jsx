import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import LinearProgress from 'material-ui/LinearProgress'

const Loader = () =>
(
  <TableRow>
    <TableRowColumn colSpan={8}><LinearProgress mode="indeterminate" /></TableRowColumn>
  </TableRow>
)

export default Loader
