
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import EnterOtp from './components/enterOtp'
import UserLogin from './components/userLogin';
import ActivateUser from './components/activateUser'
import './components/Drivers/driver.css'
import './components/HomePage/style.css'
import './components/AllUsersLR/allUser.css'
import './components/User/userStyle.css'
import './components/RegistrationForm/TravelAgency/taReg.css'
import DriverForm from './components/Drivers/driverForm';
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
function App() {
  return (
   <>
     <BrowserRouter>
           <Routes>
             <Route path='/' element={<Main/>}/>
             <Route path='/userLogin' element={<UserLogin/>} />
             <Route path='/otp' element={<EnterOtp/>}/>
             <Route path='/activateUser' element={<ActivateUser/>}/>
             <Route path='/driverForm' element={<DriverForm/>}/>
             <Route path='/carCards' element={<CarCards/>}/>
             <Route path='/allUsers' element={<AllUsers/>}/>
             <Route path='/userProfile' element={<UserPage/>}/>
             <Route path='/travelAgency' element={<TravelAgencyPage/>}/>
             <Route path='/drivers' element={<Drivers/>}/>
            <Route path='/tADetails' element={<TADetails/>}/>
            <Route path='/tAregistration' element={<TLogin/>}/>
           </Routes>
           {/*<Registration/> <DregistrationS/> */}
     </BrowserRouter>
   </>
  );
}

export default App;
