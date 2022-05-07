import { Grid } from '@mui/material'
import React from 'react'
import FilterTA from '../User/filerTA'
import DTACard from './DTAcards'
import DNavBar from './navbar'


const DTravelAgencyPage=()=>{
    return(<>
    
   <DNavBar/>
   <Grid container >
   <Grid item md={3}>
   <FilterTA />
   </Grid>
   <Grid container md={9}>
   <Grid item md={5}>
   <DTACard/>
 
   </Grid>
   <Grid item md={5}>
   <DTACard/>
   </Grid>

   <Grid item md={5}>
   <DTACard/>
   </Grid>

   <Grid item md={5}>
   <DTACard/>
   </Grid>

   <Grid item md={5}>
   {/* <Tcard/> */}
   </Grid>
   </Grid>
   </Grid>
   
   {/* <Tcard/> */}
    </>
    
    )
}
export default DTravelAgencyPage