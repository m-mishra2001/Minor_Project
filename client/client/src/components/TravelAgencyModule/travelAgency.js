import React from 'react'
import TANavBar from './navBar'
import PersistentDrawerLeft from './drawer'
import TAProfileform from './travelAgencyprofileForm'
import Cars from '../CarAttacherModule/cars'
import TACars from './taCars'

const TravelAgencyProfile=()=>{
return(<>
<TANavBar/>
{/* <TAProfileform/> */}
<TACars/>
<PersistentDrawerLeft style={{marginTop:'100px'}} />
</>)
}
export default TravelAgencyProfile