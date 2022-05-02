import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import C1Img from '../../../Images/carAttach2.png'
import theme from '../../../theme'
import Rform from '../TravelAgency/registrationForm'
import Cregform from './CregistrationForm'


const Cregitration=()=>{

return(<>
<ThemeProvider theme={theme}>
    <Box sx={{width:{
        md:'70vw',
        sm:'90vw'
    },
    height:{
        md:'85vh',
        sm:'80vh'
    },
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'100px' ,
    borderRadius:'6px',
    boxShadow: {
        md:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
        sm:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
        xs:'rgba(0, 0, 0, 0) 0px 0px 0px' 
    }
    }} >
    <Grid container >
    <Grid item md={6} sm={6} xs={12} >
   <img src={C1Img} className='cimg' />
    </Grid>

    <Grid item md={6} sm={6} xs={12}  >
<Cregform/>
    </Grid>
    </Grid>
    </Box>
    </ThemeProvider>
</>)

}

export default Cregitration