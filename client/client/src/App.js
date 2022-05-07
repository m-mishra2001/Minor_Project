
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import EnterOtp from './components/enterOtp'
import UserLogin from './components/userLogin';
import ActivateUser from './components/activateUser'

import './components/HomePage/style.css'
import './components/AllUsersLR/allUser.css'
import './components/User/userStyle.css'
import './components/RegistrationForm/TravelAgency/taReg.css'

import CarCards from './components/TravelAgencies/carCards';
import Main from './components/HomePage/main';
import AllUsers from './components/AllUsersLR/allUsers';
import CustomizedDialogs from './components/AllUsersLR/Dialog';
import NavBar from './components/User/navBar';
import UserPage from './components/User/userprofile';
import TravelAgencyPage from './components/User/travelAgency';
import FilterTA from './components/User/filerTA';
import Drivers from './components/User/drivers';
import DCards from './components/User/driverProfileCard';
import TADetails from './components/User/TADetails';
import Registration from './components/RegistrationForm/TravelAgency/registration';
import Activation from './components/RegistrationForm/TravelAgency/taActivation';
import Cregitration from './components/RegistrationForm/CarAttacher/Cregistration.js';


import Cardetails from './components/RegistrationForm/CarAttacher/Cardetails';
import DregistrationS from './components/RegistrationForm/Driver/Dregistration';
import TLogin from './components/RegistrationForm/TravelAgency/login';
import Dloginform from './components/RegistrationForm/Driver/DloginForm';
import DLogin from './components/RegistrationForm/Driver/Dlogin';
import CLogin from './components/RegistrationForm/CarAttacher/Clogin';
import EnterEmail from './components/RegistrationForm/forgotPass/enterEmail';
import ResetPassword from './components/RegistrationForm/forgotPass/resetPass';
import DriverProfile from './components/DriverModule/driverProfile';
import DTravelAgencyPage from './components/DriverModule/DTravelAgency';
import UpdatePassword from './components/RegistrationForm/forgotPass/updatePass';
import CarAttacherProfile from './components/CarAttacherModule/carAttacherProfile';
import CTravelAgencyPage from './components/CarAttacherModule/CtravelAgency';
function App() {
  return (
   <>
     <BrowserRouter>
           <Routes>
          
             <Route path='/' element={<Main/>}/>
             <Route path='/userLogin' element={<UserLogin/>} />
             <Route path='/otp' element={<EnterOtp/>}/>
             <Route path='/activateUser' element={<ActivateUser/>}/>
           
             <Route path='/carCards' element={<CarCards/>}/>
             <Route path='/allUsers' element={<AllUsers/>}/>
             <Route path='/userProfile' element={<UserPage/>}/>
             <Route path='/travelAgency' element={<TravelAgencyPage/>}/>
             <Route path='/drivers' element={<Drivers/>}/>
            <Route path='/tADetails' element={<TADetails/>}/>
            <Route path='/tAregistration' element={<Cardetails/>}/>
            <Route path='/forgotPassword' element={<EnterEmail/>}/>
            <Route path='/resetPassword' element={<UpdatePassword/>}/>
            <Route path='/DriverProfile' element={<DriverProfile/>}/>
            <Route path='/dTravelAgency' element={<DTravelAgencyPage/>}/>
            <Route path='/carAttacherProfile' element={<CarAttacherProfile/>}/>
            <Route path='/ctravelAgency' element={<CTravelAgencyPage/>}/>
           </Routes>
           {/*<Registration/> <DregistrationS/> */}
     </BrowserRouter>
   </>
  );
}

export default App;
