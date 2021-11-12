import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import OderTable from '../OderTable/OderTable';
const ManageAllOders = () => {
    const [customerbookings,setCustomerBookings]=useState([]);
    useEffect(()=>{
        const url="https://protected-eyrie-74731.herokuapp.com/allbookings"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCustomerBookings(data))
    },[])
    return (
        <>
        <Typography variant="h5" sx={{p:3}} >
         Total Oders :  {customerbookings.length}
          </Typography>
        <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
         <TableHead>
           <TableRow>
             <TableCell>Product Name</TableCell>
             <TableCell align="right">Product ID</TableCell>
             <TableCell align="right">User Name </TableCell>
             <TableCell align="right">User Email </TableCell>
             <TableCell align="right">User Address </TableCell>
             <TableCell align="right">Contact </TableCell>
             <TableCell align="right">Oder Status </TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
             {
                 customerbookings.map(customerbooking=>
                     <OderTable
                     key={customerbooking._id}
                     customer={customerbooking}
                     ></OderTable>
                 )
             }
         </TableBody>
       </Table>
     </TableContainer>
       </>
    );
};

export default ManageAllOders;