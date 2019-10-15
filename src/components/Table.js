import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'select', label: 'Select', minWidth: 70 },
  { id: 'physicianLastName', label: 'Physician Last Name', minWidth: 70 },
  { id: 'active', label: 'Active', minWidth: 70 },
  { id: 'practice', label: 'Practice', minWidth: 70 },
  { id: 'availableSpots', label: 'Available Spots', minWidth: 70 },
];

function createData(select, physicianLastName, active, practice, availableSpots) {
  return { select, physicianLastName, active, practice, availableSpots };
}

const rows = [
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  createData('','Abbott', 'Y', 'Robert W. Anderson, MD', '299/299'),
  

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}