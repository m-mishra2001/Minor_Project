import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import CImg from '../AllUsersLR/TravelAgency.png'
import theme from '../../theme';
import { ThemeProvider } from '@emotion/react';
import { Navigate, useNavigate } from 'react-router-dom';

const TCard=()=>{
    const navigate=useNavigate()
    const [value, setValue] = React.useState(2);
    return(<>
    <ThemeProvider theme={theme}>
 <Card varient="outline"  sx={{width:{
     md:'450px',
     sm:'450px',
     xs:'400px'
 },height:'250px',marginTop:'40px',
 marginLeft:{
md:0,
sm:'200px',

 },

 }}>
 <div style={{display:'flex'}}>
 <div className='sdiv'></div>
<div >
    <img src={CImg} className='cimg'/>
    <h4 style={{marginLeft:'40px ' ,marginTop:'0px'}}>TravelAgency</h4>
</div>
<div className='cardContent'>
   
    {/* <p><span className='cardHeading'>
    Tour And Travels
    </span><br/>

    <span className='cardContent2'>TravelAgency@gmail.com </span><br/>
    <span className='cardContent2'>    9386573456</span>
    </p> */}
    
  <Typography varient='h4   ' sx={{
      textAlign:'center',
      fontWeight:'600',
      fontSize:'22px',
      marginTop:'10px'
  }}>
  Tour And Travels
  </Typography>
  <Typography varient='h4   ' sx={{
      textAlign:'center',
      fontWeight:'500',
      fontSize:'17px',
        
     
  }}>
<Rating name="disabled" value={value} disabled />
  </Typography>
  
  <Typography varient='h4   ' sx={{
      textAlign:'center',
      fontWeight:'500',
      fontSize:'17px',
        
     
  }}>
  Travel@gmail.com
  </Typography>

  <Typography varient='h4' sx={{
      textAlign:'center',
      fontWeight:'300',
      fontSize:'17px',
     
  }}>
 9832655423
  </Typography>
  <Typography varient='h4   ' sx={{
      textAlign:'center',
      fontWeight:'300',
      fontSize:'17px',
     
  }}>
  65 'A' Sanchar Nagar
  </Typography>
  <Typography varient='h4   ' sx={{
      textAlign:'center',
      fontWeight:'300',
      fontSize:'17px',
     
  }}>
  Indore ,(M.P)
  </Typography>
  <Button variant="contained" color='error' sx={{marginLeft:'65px',marginTop:'10px',width:'100px',height:'50px'}} onClick={()=>{navigate("/tADetails")}}>view PRofile</Button>
</div>
 </div>


  
   
 </Card>
 </ThemeProvider>
    </>)
}

export default TCard