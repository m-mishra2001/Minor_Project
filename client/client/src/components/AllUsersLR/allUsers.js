import { Button, Grid } from '@mui/material'
import React from 'react'
import DriverIcon from './Driver.png'
import AttachCar from './AttachCar.png'
import TravelAgency from './TravelAgency.png'
import styled from '@emotion/styled'
import User from './User.png'
import allUsers, { button, gridDiv,heading } from './style'
import theme from '../../theme'
import { ThemeProvider } from '@emotion/react'

const AllUsers=()=>{

return(<>
    

    <Grid container
   
  alignItems="center"
  justifyContent="center"
  sx={{height:'50vh'}}
    >
  
    <Grid item md={6} sm={6} lg={2} xs={12} sx={gridDiv}>
    <img src={User} style={allUsers}/>
<div><Button variant="contained" disableRipple='true' sx={button}>Normal User</Button></div>
    </Grid>
    <Grid item md={6} sm={6} lg={2} xs={12} sx={gridDiv}>
    <img src={TravelAgency} style={allUsers}/>
    <div><Button variant="contained" disableRipple='true' sx={button}>Travel Agency</Button></div>
    </Grid>
    <Grid item md={6} sm={6} lg={2} xs={12} sx={gridDiv} >
   <img src={AttachCar} style={allUsers}/>
   <div><Button variant="contained" disableRipple='true' sx={button}>Car Attacher</Button></div>
    </Grid>
    <Grid item md={6} sm={6} lg={2} xs={12} sx={gridDiv}     >
    <img src={DriverIcon} style={allUsers} />
    <div><Button variant="contained" disableRipple='true' sx={button}>Drivers</Button></div>

    </Grid>
   


    </Grid>
</>)

}
export default AllUsers