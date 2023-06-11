import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Screens/Home';
import Registration from './Screens/Registration';
import Login from './Screens/Login';
import BankPage from './Screens/BankPage';
import Patient from './Screens/Patient';
import PatientRequest from './Screens/PatientRequest';
import MyStats from './Components/MyStats'
import DonorReg from './Components/DonorReg';
import Donor from './Components/Donor';
function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Registration" element={<Registration/>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/BankPage" element={<BankPage/>} />
        <Route exact path="/patient" element={<Patient/>} />
        <Route exact path="/Patientrequest" element={<PatientRequest/>}/>
        <Route exact path="/Donor" element={<Donor />} />
          <Route exact path="/MyStats" element={<MyStats />} />
         
        </Routes>
        
      </div>
    </Router>



  );
}

export default App;