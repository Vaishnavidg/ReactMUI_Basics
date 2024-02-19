import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function MuiTable() {
  return (
   <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
    {/* stickyHeader prop helps to fixed the header */}
    <Table aria-label='simple-table' stickyHeader >
        <TableHead >
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                {/* used align operater */}
                <TableCell align='center'>Age</TableCell>
            </TableRow>
        </TableHead>
<TableBody>
{rows.map((row)=>(
    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell align='center'>{row.age}</TableCell>

    </TableRow>
))}
</TableBody>
    </Table>
   </TableContainer>
  )
}
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
