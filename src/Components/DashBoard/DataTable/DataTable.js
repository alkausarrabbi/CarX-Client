import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';


const DataTable = (props) => {
    const {name,product,email,Address,phone,order,_id}=props.userOder;


    const handleBooking= id=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://protected-eyrie-74731.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {  
                    if (data.deletedCount > 0) {
                        alert('successfully deleted');
                        window.location.reload(false)
                    }
                });
        }
    }


    return (
        <TableRow
               
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        {product}
        </TableCell>
        <TableCell align="right">{email}</TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{Address}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="right">{order}</TableCell>

        <TableCell align="right"><Button sx={{ width: '50%', m: 1 ,backgroundColor:'red' }} onClick={() => handleBooking(_id)}variant="contained">Delete</Button></TableCell>
      </TableRow>
    );
};

export default DataTable;