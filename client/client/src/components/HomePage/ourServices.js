import { Button, Grid } from '@mui/material'
import React from 'react'
import TaVector from './TaVector.png'
import DVector from './DVector.png'
import { ThemeProvider } from '@emotion/react'
import theme from '../../theme'
const OurServices=()=>{

    return(<>
     <div >
     <h1 className='servicesHeading'>Our Services</h1>
     <Grid container sx={{
         marginLeft:'138px',
         
         
     }}>
     {/* Travel Agency section */}
     <Grid item md={6} sm={12}>
      <h2 className='TRavelAgency'>Travel Agencies</h2>
      <p className='travelAgencyP'>Lorem Ipsum is simply dummy text <br/>of the
printing and typesetting industry. <br/>Lorem 
Ipsum has been the industry's standard <br/>
text ever since the 1500s, when an unknown printer</p>
<div>
<ThemeProvider theme={theme}>
<Button variant="contained" sx={{width:{
           md:'205px',
           sm:'200px',
           xs:'190px',
           sx:'180px',
           xxs:'150px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'50px',
           sx:'30px',
           xxs:'30px'
       },background:'#C4C4C4',fontFamily:'sans-serif', fontSize:'15 px',color:'black',borderRadius:'19px'}}>Login/Registration   </Button>
<Button variant="contained" sx={{width:{
           md:'159px',
           sm:'154px',
           xs:'140px',
           sx:'130px',
           xxs:'120px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'55px',
           sx:'30px',
           xxs:'30px'
       },background:'#C4C4C4',fontFamily:'sans-serif',marginLeft:'10px', fontSize:'15 px',color:'black',borderRadius:'19px'}}>BOOK RIDE</Button>
 
</ThemeProvider>
</div>
    
     </Grid>
     <Grid item md={6} sm={12}>
      <img src={TaVector} className='TaVector'/>
     </Grid>
     {/* </Grid> */}

{/* Drivers section */}
     {/* <Grid container sx={{
         marginLeft:'138px',
         height:'457px',
         width:'1334px',
         
     }} > */}
     <Grid item md={6} sm={12}>
     <img src={DVector} className='TaVector'/>
     </Grid>
     <Grid item md={6} sm={12}>
     <h2 className='TRavelAgency'>Drivers</h2>
      <p className='travelAgencyP'>Lorem Ipsum is simply dummy text <br/>of the
printing and typesetting industry. <br/>Lorem 
Ipsum has been the industry's standard <br/>
text ever since the 1500s, when an unknown printer</p>
<div>


<ThemeProvider theme={theme}>
<Button variant="contained" sx={{width:{
           md:'205px',
           sm:'200px',
           xs:'190px',
           sx:'180px',
           xxs:'150px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'50px',
           sx:'30px',
           xxs:'30px'
       },background:'#C4C4C4',fontFamily:'sans-serif', fontSize:'15 px',color:'black',borderRadius:'19px'}}>Login/Registration   </Button>
<Button variant="contained" sx={{width:{
           md:'159px',
           sm:'154px',
           xs:'140px',
           sx:'130px',
           xxs:'120px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'55px',
           sx:'30px',
           xxs:'30px'
       },background:'#C4C4C4',fontFamily:'sans-serif',marginLeft:'10px', fontSize:'15 px',color:'black',borderRadius:'19px'}}>Hire Driver</Button>
 
</ThemeProvider>
 
</div>
    
     </Grid>
     {/* </Grid> */}

     {/* Car Attacher Section */}
     {/* <Grid container sx={{
         marginLeft:'138px',
         height:'457px',
         width:'1334px',
         
     }}> */}
     {/* Travel Agency section */}
     <Grid item sm={6}>
      <h2 className='TRavelAgency'>Car Attacher</h2>
      <p className='travelAgencyP'>Lorem Ipsum is simply dummy text <br/>of the
printing and typesetting industry. <br/>Lorem 
Ipsum has been the industry's standard <br/>
text ever since the 1500s, when an unknown printer</p>
<ThemeProvider theme={theme}>
<Button variant="contained" sx={{width:{
           md:'205px',
           sm:'200px',
           xs:'190px',
           sx:'180px',
           xxs:'150px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'50px',
           sx:'30px',
           xxs:'30px'
       },background:'#C4C4C4',fontFamily:'sans-serif', fontSize:'15 px',color:'black',borderRadius:'19px'}}>Login/Registration   </Button>
<Button variant="contained" sx={{width:{
           md:'159px',
           sm:'154px',
           xs:'140px',
           sx:'130px',
           xxs:'120px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'55px',
           sx:'30px',
           xxs:'30px'
       },background:'#C4C4C4',fontFamily:'sans-serif',marginLeft:'10px', fontSize:'15 px',color:'black',borderRadius:'19px'}}>Attach Car</Button>
 
</ThemeProvider>
     </Grid>
     <Grid item sm={6}>
      hello
     </Grid>
     {/* </Grid> */}
     </Grid>
     </div>
    </>)
}
export default OurServices