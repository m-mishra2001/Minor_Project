import React from 'react'
import BookingList from './bookingList'
import PersistentDrawerLeft from './drawer'
import AlignItemsList from './driversList'
import NavBar from './navBar'
import PEdit from './pEditForm'
import Profile from './profile'

const UserPage=()=>{
    const i=0;
 return(<>
     <NavBar />
     
    {/* <div  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width:'75vw',height:'80vh',marginLeft:'auto',marginRight:'auto'}}>
    <Profile/>
    <PEdit/>
    </div> */}
    <AlignItemsList />
    {/* <BookingList/> */}
    {/* {
       i==0? <>
       <Profile/>
           
           <PEdit/>
       </>:(i==1?<AlignItemsList />:<BookingList/>)
    } */}
     <PersistentDrawerLeft style={{marginTop:'100px'}} in={i}/>
     
     </>)
}
export default UserPage
