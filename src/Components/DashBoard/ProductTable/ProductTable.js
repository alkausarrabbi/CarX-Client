import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';

const ProductTable = (props) => {
    const {name,price,_id}=props.service;

    const handleProducts= id=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://protected-eyrie-74731.herokuapp.com/allproducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {  
                    if (data.deletedCount > 0) {
                        alert('Product successfully deleted');
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
       {name}
        </TableCell>
        <TableCell align="right">{price}</TableCell>
        <TableCell align="right">{_id}</TableCell>
   
        

        <TableCell align="right"><Button sx={{ width: '50%', m: 1 ,backgroundColor:'red' }} onClick={() => handleProducts(_id)}variant="contained">Delete</Button></TableCell>
      </TableRow>
    );
};

export default ProductTable;