import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from './Title'

// Generate Order Data
function createData(id: number, date: string, amount: number) {
  return { id, date, amount }
}

const rows = [
  createData(0, '16 Mar, 2019', 312.44),
  createData(1, '16 Mar, 2019', 866.99),
  createData(2, '16 Mar, 2019', 100.81),
  createData(3, '16 Mar, 2019', 654.39),
  createData(4, '15 Mar, 2019', 212.79),
]

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function AssetList() {
  return (
    <React.Fragment>
      <Title>最近の資産一覧</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">総資産額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  )
}
