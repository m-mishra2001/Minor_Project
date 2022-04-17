import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

import FormWrap, { WrapStyle } from './formWrap';
const UserLogin=()=>{

{/* <div><TextField id="outlined-basic" label="phone no." variant="outlined" name="phone no." value={phoneNo} onChange={handlechange} /> </div> */}

return<>

  <FormWrap msgHead="Enter your Mobile Number" otpmsg="A 4 digit OTP will be send on SMS" button="Next ->" inputfield="phoneNo" url="/otp">
 
  </FormWrap>

</>

}

export default UserLogin