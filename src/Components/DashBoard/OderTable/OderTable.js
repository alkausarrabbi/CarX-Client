import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';


const OderTable = (props) => {
    const {name,email,productId, order,Address,phone,product,_id}=props.customer;

    const handleOders= id=>{
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


    const handleOdersUpdate=id=>{

        const order={order:"Shipped"};
        const url = `https://protected-eyrie-74731.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload(false)
                }
            })
    }






    return (
        <TableRow
               
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
       {product}
        </TableCell>
        <TableCell align="right">{productId}</TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{email}</TableCell>
        <TableCell align="right">{Address}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="right">{order}</TableCell>
   
        

        <TableCell align="right"><Button sx={{ width: '50%', m: 1 ,backgroundColor:'red' }} onClick={() => handleOders(_id)}variant="contained">Delete</Button></TableCell>

        <TableCell align="right"><Button sx={{ width: '50%', m: 1 ,backgroundColor:'blue' }} onClick={() => handleOdersUpdate(_id)}variant="contained">Shipped</Button></TableCell>
      </TableRow>
    );
};

export default OderTable;