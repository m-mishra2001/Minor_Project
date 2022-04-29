import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import AImg from '../../../Images/ActivationImg.png'
import theme from '../../../theme'
import Rform from './registrationForm'
import Aform from './activationForm'
const Activation=()=>{
    return(<>
 <ThemeProvider theme={theme}>
    <Box sx={{width:{
        md:'70vw',
        sm:'90vw'
    },
    height:{
        md:'80vh',
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
    <Grid item md={6} sm={6} xs={12}  >
   <Aform/>
    </Grid>
    <Grid item md={6} sm={6} xs={12} >
   <img src={AImg} className='aimg' />
    </Grid>

    
    </Grid>
    </Box>
    </ThemeProvider>
    </>)
}
export default Activation