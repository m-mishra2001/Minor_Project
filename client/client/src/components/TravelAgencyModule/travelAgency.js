import React from 'react'
import TANavBar from './navBar'
import PersistentDrawerLeft from './drawer'
import TAProfileform from './travelAgencyprofileForm'
import Cars from '../CarAttacherModule/cars'

const TravelAgencyProfile=()=>{
return(<>
<TANavBar/>
{/* <TAProfileform/> */}
<Cars/>
<PersistentDrawerLeft style={{marginTop:'100px'}} />
</>)
}
export default TravelAgencyProfile