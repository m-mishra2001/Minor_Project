
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home';
import EnterOtp from './components/enterOtp'
import UserLogin from './components/userLogin';
import ActivateUser from './components/activateUser'
function App() {
  return (
   <>
     <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/userLogin' element={<UserLogin/>} />
             <Route path='/otp' element={<EnterOtp/>}/>
             <Route path='/activateUser' element={<ActivateUser/>}/>
           </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
