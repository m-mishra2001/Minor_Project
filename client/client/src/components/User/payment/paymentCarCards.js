import { Box, Button, Card, Checkbox, Grid, Typography } from '@mui/material'
import React from 'react'
import CarImg from '../../../Images/carAttach1.png'
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from '@mui/material';
const options = ['Desel', 'Petrol']
const PaymentCards=()=>{
  // const [value, setValue] = React.useState(2);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   const state= data.get('state')

  const d={
      state: data.get('name'),
      city: data.get('phoneno'),
      address:data.get('email'),
      password:data.get('password'),
      cPass:data.get('cpassword')
    }
    console.log(d)
  };

const [value, setValue] = React.useState(options[0]);
const [inputValue, setInputValue] = React.useState('');
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};
    return(<>
    
    <Box sx={{width:{
        md:'50vw',
        sm:'90vw'
    },
    height:{
        md:'30vh',
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
    <Grid container>
    <Grid item md={5}>
    <img src={CarImg} className='bookingCar'/>
    </Grid>
    <Grid item md={7} mt={4}>
    <Typography sx={{
          fontWeight:'700',
          fontSize:'22px',
          
      }}>
     
       DZire
      </Typography>
      <Typography sx={{
          fontWeight:'700',
          fontSize:'22px',
          
      }}>
     
     <Rating name="read-only" value={value} readOnly />
      </Typography>
      <Typography sx={{
          fontWeight:'700',
          fontSize:'16px',
          display:'flex'
         
        //   marginTop:1
          
      }}>
   
   SEDAN  
|   AC
|   4 Seats
      </Typography>
      <Typography sx={{
          fontWeight:'400',
          fontSize:'13px',
         
          display:'flex',
         
       
        //   marginTop:1
          
      }}>
  587 kms included<br></br>
₹30.0/km after 587 kms
      </Typography>
      <Typography sx={{
          fontWeight:'400',
          fontSize:'13px',
         
          display:'flex',
         
       
        //   marginTop:1
          
      }}>
   10 luggage bags
      </Typography>
      <Typography sx={{
          fontWeight:'300',
          fontSize:'17px',
         
          display:'flex',
         
        //   marginTop:1
          
      }}>
  Diesel Car
      </Typography>
    </Grid>

    </Grid>
    </Box>

    <Box sx={{width:{
        md:'50vw',
        sm:'90vw'
    },
    height:{
        md:'65vh',
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

    <Grid container ml={5}>
    <Box component="form" noValidate onSubmit={handleSubmit} >
            <Typography component="h1" variant="h5" sx={{marginTop:2,fontSize:'30px',textAlign:'center'}}>
             Fill details to confirm booking
            </Typography>
            
        
           
         
            <Grid container spacing={2} sx={{ mt: 2 }}>
            
                <Grid item xs={12} sm={5} ml={2}>
                <span>Pick up point</span>
                  <TextField
                    autoComplete="given-name"
                    name="pickupPoint"
                    required
                    fullWidth
                    id="pickupPoint"
                    label="pickupPoint"
                   
                  />
                </Grid>
                <Grid item xs={12} sm={5} ml={2}>
                <span>Pick up Date</span>
                  <TextField
                    required
                    type="date"
                    fullWidth
                    id="type"
                    name="pickUpDate"
                    label=""
                    autoComplete="family-name"
                  />
                </Grid>
               
                <Grid item xs={12} sm={5} ml={2}>
                <span>Destination point</span>
                  <TextField
                    autoComplete="given-name"
                    type="text"
                    name="DestinationPoint"
                    required
                    fullWidth
                    id="DestinationPoint"
                    label="DestinationPoint"
                    
                  />
                </Grid>
                <Grid item  xs={10} sm={5} ml={2}>
                <span>Drop Date</span>
                <TextField
                    
          id="outlined-size-small"
          defaultValue="Small"
          
                    required
                    type="date"
                    fullWidth
                    
                    name="DropDate"
                   
                    autoComplete="family-name"
          
        />
                 
                </Grid>
                <Grid item xs={12} md={10.3} ml={2}>
               
    <span>Pick Up Time</span>
    <TextField
                   type='time'
                    required
                    fullWidth
                    id="pickUpTime"
                    name="pickUpTime"
                    
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={10} ml={2} sx={{display:'flex'}}>
                <FormGroup>
                <FormControlLabel
            control={
              <Checkbox   name="ac" />
            }
            label="OUTSTATION ONE-WAY"
          /></FormGroup>
          <FormGroup>
         <FormControlLabel
            control={
              <Checkbox   name="nonac" />
            }
            label="OUTSTATION ROUND TRIP"
          /></FormGroup>
          
                </Grid>
             
                
              </Grid>
              <Grid item md={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2,ml:'70px',mr:'70px' ,width:"500px"}}
              >
               confirm booking
            
              </Button>
              </Grid>
           
              </Box>


    </Grid>

    
    </Box>

    
    </>)
}

export default PaymentCards