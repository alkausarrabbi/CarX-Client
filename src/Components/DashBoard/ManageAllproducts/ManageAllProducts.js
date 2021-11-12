import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';



const ManageAllProducts = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch("https://protected-eyrie-74731.herokuapp.com/allproducts")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <>
        <Typography variant="h5" sx={{p:3}} >
         Total Products :  {services.length}
          </Typography>
        <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
         <TableHead>
           <TableRow>
             <TableCell>Product Name</TableCell>
             <TableCell align="right">Product Price</TableCell>
             <TableCell align="right">Product ID</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
          {
              services.map(service=><ProductTable
              key={service._id}
              service={service}
              >

              </ProductTable>)
          }
         </TableBody>
       </Table>
     </TableContainer>
       </>
    );
};

export default ManageAllProducts;