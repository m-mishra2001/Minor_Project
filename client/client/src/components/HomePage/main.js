import { Container, Grid } from '@mui/material'

import React from 'react'
import StickyFooter from '../footer'
import Header from './header'
import OurServices from './ourServices'

 const Main=()=>{

 return(<>

<Grid container>
<Grid item md={12} sm={12}>
<Header/>
</Grid>
<Grid item md={12} sm={12} xs={12} sx={{
    marginTop:{
        md:0,
        sm:40,
        xs:50
    }
}}>
<OurServices/>
</Grid>
</Grid>
<StickyFooter/>

</>)

 }
 export default Main