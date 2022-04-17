import { ThemeProvider } from '@emotion/react';
import { Button, Container, Grid } from '@mui/material';
import { createTheme } from '@mui/system';
import React, { useRef, useState } from 'react'
import MainHeading from './CommonFormElements/mainHeading';
import Textinput from './inputFields';

const theme = createTheme({
    breakpoints: {
      values: {
       xxs: 0, // small phone
       sx: 300, // phone
        xs: 400, // phone
        sm: 600, // tablets
        md: 950, // small laptop
        
      }
    }
  });
  const textFStyle={width:"98%",height:"100%",borderRadius:"5px",
  background:'#C4C4C4',border: "0px solid",marginTop:'60px'
  }

const ActivateUser=()=>{
    const fileInputRef=useRef(null)
const [FormData,setFormData]=useState({
    profile:{},
    name:"",
    email:""
})



return(<>
   <Container>
   
   <Grid 
   container
  
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
<div className='activateUser'>
<MainHeading heading="Login/Registration"/>
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
    md: '163px',
    sm:'145px',
    xs:'120px',
    sx:'110px',
    xxs:'120px'
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
 onChange={(e)=>{
const file=e.target.files[0]
const n=e.target.name

if(file){
    setFormData({...FormData,[n]:file})
    console.log(FormData)
}
 }}/>
</Grid>
<container sx={{
    position: 'absolute',
width: '350px',
height: '326px',
MarginTop:'295px'
}}>
<Grid iteam sx={
          { width:{
              md:'350px',
              sm:'320px',
              xs:'250px',
              sx: '200px',
              xxs: '150px'
          },
            height:'35px',
         paddingTop:'200px',   
         marginLeft:'auto',
         marginRight:'auto',
       }
       } >
<p className='activateUserfield' >Name</p>
</Grid>
 <Grid item  sx={
          { width:{
              md:'350px',
              sm:'320px',
              xs:'250px',
              sx: '200px',
              xxs: '150px'
          },
            height:'35px',
           
         marginLeft:'auto',
         marginRight:'auto',
       }
       }>
      
      <input type="text" style={textFStyle}></input>

       </Grid>
<Grid iteam sx={
          { width:{
              md:'350px',
              sm:'320px',
              xs:'250px',
              sx: '200px',
              xxs: '150px'
          },
            height:'35px',
         paddingTop:'70px',   
         marginLeft:'auto',
         marginRight:'auto',
       }
       } >
<p className='activateUserfield' >email</p>
</Grid>
 <Grid item  sx={
          { width:{
              md:'350px',
              sm:'320px',
              xs:'250px',
              sx: '200px',
              xxs: '150px'
          },
            height:'35px',
           
         marginLeft:'auto',
         marginRight:'auto',
       }
       }>
      
      <input type="text" placeholder='example@gmail.com' style={textFStyle}></input>

       </Grid>
      
       <Grid item sx={ { width:{
              md:'350px',
              sm:'320px',
              xs:'250px',
              sx: '200px',
              xxs: '150px'
          },
            height:'35px',
           marginTop:'100px',
         marginLeft:'auto',
         marginRight:'auto',
       }
       }>
           <button className='activateButton'>
               Finish->
           </button>
       </Grid>

</container>
</ThemeProvider>
</form>

</div>
   </Grid>
     
   </Container>
</>)


}
export default ActivateUser;