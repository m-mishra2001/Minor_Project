import { Grid } from '@mui/material'
import React from 'react'
import FilterTA from './filerTA'
import NavBar from './navBar'
import Tcard from './TravelAgencyCards'
const TravelAgencyPage=()=>{
    return(<>
   <NavBar/>

 
 

   <Grid container >
   <Grid item md={4}>
   <FilterTA />
   </Grid>
   <Grid item md={4}>
   <Tcard/>
   </Grid>
   <Grid item md={4}>
   <Tcard/>
   </Grid>
   <Grid item md={4}>
  
   </Grid>

   <Grid item md={4}>
   <Tcard/>
   </Grid>

   <Grid item md={4}>
   <Tcard/>
   </Grid>

   </Grid>
   
   {/* <Tcard/> */}
    </>)
}
export default TravelAgencyPage