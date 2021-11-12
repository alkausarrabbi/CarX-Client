import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataTable from '../DataTable/DataTable';
import { Typography } from '@mui/material';

const DashBoardWelcome = () => {
    const [userOders,setUserOders]=useState([]);
    const {user}=useAuth()

    useEffect(()=>{
        fetch(`https://protected-eyrie-74731.herokuapp.com/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setUserOders(data))
    },[user.email]);

    

    return (
        <>
         <Typography variant="h5" sx={{p:3}} >
         Your Total Booking is :  {userOders.length}
          </Typography>
        
         <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">User Email</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
             {
                 userOders.map(userOder=>
                 <DataTable
                 key={userOder._id}
                 userOder={userOder}
                 >

                 </DataTable> )
             }
           
          </TableBody>
        </Table>
      </TableContainer>
        </>
    );
};

export default DashBoardWelcome;