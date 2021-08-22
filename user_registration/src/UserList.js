import React, { useEffect, useState } from 'react';
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
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
   table:{
       width: '96%',
       marginTop: '3rem',
       marginLeft: '2rem',
       marginRight: '2rem',
       marginBottom: '2rem'
   }
});

export const UserList = () => {
  const classes = useStyles();
  const [items, setItems] = useState([])

  useEffect(() => {
    getUserList();
  }, [])

  function getUserList(){
    const fetchItems = async () => {
      const users = await getUsers()
      setItems(users)
    }
    fetchItems()
  }
  const onDelete = (id) =>{
    fetch(`http://localhost:4000/${id}` , {
      method:'DELETE'
    }).then((result) => result.json()).then((resp)=>{
      alert("User Deleted")
      console.warn(resp)
      getUserList();
    })
  };
    return(
        <TableContainer className={classes.table} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Last Name</StyledTableCell>
                        <StyledTableCell>Frist Name</StyledTableCell>
                        <StyledTableCell>Middle Name</StyledTableCell>
                        <StyledTableCell>Birthday</StyledTableCell> 
                        <StyledTableCell>Gender</StyledTableCell>
                        <StyledTableCell>Civil Status</StyledTableCell>
                        <StyledTableCell>Nationality</StyledTableCell>
                        <StyledTableCell>Phone Number</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((user) => (
                        <StyledTableRow key={user._id}>
                            <StyledTableCell>{user.name}</StyledTableCell>
                            <StyledTableCell>{user.first_name}</StyledTableCell>
                            <StyledTableCell>{user.middle_name}</StyledTableCell>
                            <StyledTableCell>{user.birthday}</StyledTableCell>
                            <StyledTableCell>{user.gender}</StyledTableCell>
                            <StyledTableCell>{user.civil_status}</StyledTableCell>
                            <StyledTableCell>{user.nationality}</StyledTableCell>
                            <StyledTableCell>{user.phone_number}</StyledTableCell>
                            <StyledTableCell>{user.email}</StyledTableCell>
                            <StyledTableCell>
                              <IconButton color="default" aria-label="upload picture" href={`/edit/${user._id}`}>
                                <EditIcon/>
                              </IconButton>
                              <IconButton color="secondary" aria-label="upload picture" onClick={() => onDelete(user._id)}>
                                <DeleteIcon/>
                              </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}; 