import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import DImg from '../../../Images/DriverReg.png'
import theme from '../../../theme'
import Rform from '../TravelAgency/registrationForm'
import Dregform from './DregForm'



const DregistrationS=()=>{

return(<>
<ThemeProvider theme={theme}>
    <Box sx={{width:{
        md:'70vw',
        sm:'90vw'
    },
    height:{
        md:'90vh',
        sm:'80vh'
    },
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'50px' ,
    borderRadius:'6px',
    boxShadow: {
        md:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
        sm:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
        xs:'rgba(0, 0, 0, 0) 0px 0px 0px' 
    }
    }} >
    <Grid container >
    <Grid item md={6} sm={6} xs={12} >
   <img src={DImg} className='cimg' />
    </Grid>

    <Grid item md={6} sm={6} xs={12}  >
<Dregform/>
    </Grid>
    </Grid>
    </Box>
    </ThemeProvider>
</>)

}

export default DregistrationS