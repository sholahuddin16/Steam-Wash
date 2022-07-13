import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Grow, Grid } from '@material-ui/core';

function createData(name, calories, fat, carbs, kurun, protein) {
  return { name, calories, fat, carbs, kurun, protein };
}

const rows = [
  createData('Tejo', '140 Pelanggan', 'Rp.10.000', 'Rp.1.400.000', '7 Hari', 'admin 1'),
  createData('Joni', '147 Pelanggan', 'Rp.10.000', 'Rp.1.470.000', '7 Hari', 'admin 1'),
  createData('John', '154 Pelanggan', 'Rp.10.000', 'Rp.1.540.000', '7 Hari', 'admin 1'),
  createData('Saprol', '161 Pelanggan', 'Rp.10.000', 'Rp.1.610.000', '7 Hari', 'admin 1'),
];

const pageTransaksi = () => {
  return (
    <Container maxWidth="xl">
      <Grow in>
      <Grid item xs={12} sm={7}>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nama Pegawai</TableCell>
                <TableCell align="right">Jumlah Pelayanan</TableCell>
                <TableCell align="right">Harga Pelayanan</TableCell>
                <TableCell align="right">Total Pelayanan</TableCell>
                <TableCell align="right">Kurun Waktu</TableCell>
                <TableCell align="right">Create By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.kurun}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer >
        </Grid>
      </Grow>
    </Container>
  )
}

export default pageTransaksi;