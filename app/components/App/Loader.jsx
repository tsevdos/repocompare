import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import CircularProgress from 'material-ui/CircularProgress'

const columnStyle = {
  textAlign: 'center'
}

const Loader = () =>
(
  <TableRow>
    <TableRowColumn colSpan={8} style={columnStyle}><CircularProgress /></TableRowColumn>
  </TableRow>
)

export default Loader
