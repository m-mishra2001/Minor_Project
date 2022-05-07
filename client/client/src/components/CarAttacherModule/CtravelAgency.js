import { Grid } from '@mui/material'
import React from 'react'
import FilterTA from '../User/filerTA'
import CTACard from './cTACards'
import CNavBar from './navBar'


const CTravelAgencyPage=()=>{
    return(<>
    
   <CNavBar/>
   <Grid container >
   <Grid item md={3}>
   <FilterTA />
   </Grid>
   <Grid container md={9}>
   <Grid item md={5}>
   <CTACard/>

 
   </Grid>
   <Grid item md={5}>
   <CTACard/>
   </Grid>

   <Grid item md={5}>
   <CTACard/>
   </Grid>

   <Grid item md={5}>
   <CTACard/>
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
export default CTravelAgencyPage