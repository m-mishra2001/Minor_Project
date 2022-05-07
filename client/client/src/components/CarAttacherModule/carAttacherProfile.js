import React from 'react'
import CNavBar from './navBar'
import PersistentDrawerLeft from './drawer'
import CProfileform from './CprofileEditForm'
import Cars from './cars'
import TAList from './tAList'

const CarAttacherProfile=()=>{
    return(<>
    <CNavBar/>
    {/* <CProfileform/> */}
    {/* <Cars/> */}
    <TAList/>
    <PersistentDrawerLeft style={{marginTop:'100px'}} />
    </>)
}
export default CarAttacherProfile