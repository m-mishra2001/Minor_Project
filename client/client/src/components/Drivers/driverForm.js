import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import React,{ useRef, useState } from 'react'
import theme from '../../theme'
import MainHeading from '../CommonFormElements/mainHeading'


const DriverForm=()=>{
  const fileInputRef=useRef(null)
return(<>
    <container>
     <Grid 
   container
  
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
    <div className='driverForm'>
         < Grid item>
         <MainHeading heading="REGISTER AS DRIVER"/> </Grid>
         <form>
           <ThemeProvider theme={theme}>
           <Grid item sx={{
    position: 'absolute',
width: {
    md:'174.88px',
    sm:'168px',
    xs:'160px',
    sx:'155px',
    xxs:'150px'
},
height: '160.08px',
background:'black',
left:{
    md: '120px',
    sm:'120px',
    xs:'110px',
    sx:'110px',
    xxs:'110px'
},
borderRadius:'100px'
}}>
<button
style={{
    marginTop:'80%',
    marginLeft:'60%'
}}
onClick={(e)=>{
    e.preventDefault()
    fileInputRef.current.click()
}}   
>
 add image
</button>
<input type="file" style={{display:"none"}} ref={fileInputRef}
name="profile"
 />
</Grid>
<Grid item sx={{
    position:"absolute"
}}>
    
</Grid>
           </ThemeProvider>
         </form>
        
        </div>
</Grid>
        
    </container>
</>)

}
export default DriverForm