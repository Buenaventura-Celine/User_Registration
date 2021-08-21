import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from './api';

//for designing
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette : {
        type : 'dark',
        background : {
            default : "#000000"
        },
        secondary : {
            main : '#E19A4C'
        }
    }
})


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const useStyles = makeStyles({
    
    table :{
        maxWidth: 700,
        marginLeft: '2rem',
        marginRight: '2rem',
        marginTop: '4rem',
        marginBottom: '4rem',
    }
});

export const UserList = () => {
    const classes = useStyles();
    const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const users = await getUsers()
      setItems(users)
    }
    fetchItems()
  }, [])


    return(
        <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((user) => (
                    <StyledTableRow key={user._id}>
                        <StyledTableCell>{user.name}</StyledTableCell>
                        <StyledTableCell>
                            <Link to={`/edit/${user._id}`}>Edit</Link>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
        // <div className="container">
        //     <div className="mt-3">
        //         <h3>User List</h3>
        //         <table className="table table-striped mt-3">
        //             <thead>
        //                 <tr>
        //                     <th>Name</th>
        //                     <th>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     items.map(user => (
        //                         <tr key={user._id}>
        //                             <td>
        //                                 {user.name}
        //                             </td>
        //                             <td>
        //                                 <Link to={`/edit/${user._id}`}>Edit</Link>
        //                             </td>
        //                         </tr>
        //                     ))
        //                 }
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
}; 