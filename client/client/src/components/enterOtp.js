import React from 'react'
import FormWrap from './formWrap'

const EnterOtp=()=>{
    return(<>
         <FormWrap msgHead="Enter 4 Digit OTP" otpmsg="A 4 digit OTP has been send on SMS" button="Submit" inputfield="otp" url="/activateUser">
 
 </FormWrap>
    </>)
}
export default EnterOtp