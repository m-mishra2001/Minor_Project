import { Button, Grid } from '@mui/material'
import React from 'react'

import TACarCard from './TACarCard'
import TAFormDialog from './tAddCar'

const TACars=()=>{
    return(<>
       
       
     <Grid container md={9} sx={{marginLeft:{
         md:30,
         sm:7,
         xs:6
     }}}>
     <Grid item md={12} sm={12} >
     {/* <Button variant='contained' color='error' sx={{marginLeft:3,marginTop:'6px',height:'60px',width:'100px'}}>Add  Car</Button> */}
     <TAFormDialog/>
     </Grid>
    

<Grid item md={4} sm={6} xs={12}sx={{paddingLeft:'20px'}}>

<TACarCard />
</Grid>

<Grid item md={4} sm={6} xs={12} sx={{paddingLeft:'20px'}}>
<TACarCard/>
</Grid>
<Grid item md={4} sm={6} xs={12} sx={{paddingLeft:'20px'}}>
<TACarCard/>
</Grid>
<Grid item md={4} sm={6} xs={12} sx={{paddingLeft:'20px'}}>
<TACarCard/>
</Grid>
<Grid item md={4} sm={6} xs={12} sx={{paddingLeft:'20px'}}>
<TACarCard/>
</Grid>
</Grid>
    </>)
}
export default TACars