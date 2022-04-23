
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home';
import EnterOtp from './components/enterOtp'
import UserLogin from './components/userLogin';
import ActivateUser from './components/activateUser'
import './components/Drivers/driver.css'
import './components/HomePage/style.css'
import './components/AllUsersLR/allUser.css'
import DriverForm from './components/Drivers/driverForm';
import CarCards from './components/TravelAgencies/carCards';
import Main from './components/HomePage/main';
import AllUsers from './components/AllUsersLR/allUsers';
import CustomizedDialogs from './components/AllUsersLR/Dialog';
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
           </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
