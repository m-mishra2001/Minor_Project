import { ThemeProvider } from '@emotion/react'
import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import theme from '../../theme'
import NavBar from './navBar' 
import homeimg from '../../Images/homePage.gif'
const header=()=>{
   
    return(<>
     <ThemeProvider theme={theme}>
        <div className='header'>
        <NavBar/>
        <Grid container>
        <Grid item md={6} sm={12}>
       <div className='headerTextdiv'>
        <span className='headerText'>Book The best Cars<br/>
       With Us</span>
       <p className='headerText2'>Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the indus
       </p>
      
       <Button variant="contained" sx={{width:{
           md:'159px',
           sm:'154px',
           xs:'140px',
           sx:'130px'
       },height:{
           md:'56px',
           sm:'56px',
           xs:'50px',
           sx:'30px'
       },top:{
           md:'210px',
           sm:'200px',
           xs:'155px',
           sx:'120px'
       },background:'#C4C4C4',fontFamily:'sans-serif', fontSize:{
           md:'20px',
           sm:'20px',
           xs:'15px',
           sx:'12px'
       },color:'black',borderRadius:'19px'}} className='button'>Book Now</Button>
       
      
       
     
       </div>
       </Grid>
       <Grid item md={6} sm={12} sx={{
           marginTop:{
               md:0,
               sm:25,
               xs:30
           }
       }}>
       <img src={homeimg}/>
       </Grid>
       </Grid>
</div>
 </ThemeProvider>
    </>)
} 
export default header