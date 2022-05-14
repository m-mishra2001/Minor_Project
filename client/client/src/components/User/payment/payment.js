import { Container, Grid ,Box, Button, Card, Checkbox,  Typography} from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import PaymentCards from './paymentCarCards'
import NavBar from '../navBar';

const Payment=()=>{

return(<>
    <NavBar/>
    <Grid Container sx={{display:'flex'}}>
    <Grid item md={7} sm={6} >
    <PaymentCards/>
    </Grid>
    <Grid item md={5} sm={6}>
    
    <Box sx={{width:{
        md:'30vw',
        sm:'90vw'
    },
    height:{
        md:'45vh',
        sm:'80vh'
    },
   
    marginTop:'50px' ,
    borderRadius:'6px',
    boxShadow: {
        md:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
        sm:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
        xs:'rgba(0, 0, 0, 0) 0px 0px 0px' 
    },
    marginLeft:10
    }} >

<div style={{padding:"20px"}}>
<Button variant="contained" fullWidth sx={{height:"50px"}}>Pay Now</Button>
<FormGroup sx={{display:"flex",mt:5}}>
     <FormControlLabel label="Make Part payment Now" control={<Checkbox defaultChecked />}/>
      <FormControlLabel control={<Checkbox defaultChecked />}  label="Make full Payment Now" />
</FormGroup>
<hr></hr>
<Typography>
 <span style={{fontSize:20}}>Total Amount:-</span><br></br>
 <span>inc. tolls taxes</span>
</Typography>

</div>
 
    </Box>
  
    </Grid>
    
   
    </Grid>
   
    
    
</>)

}
export default Payment