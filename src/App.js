import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import PatientLogin from './component/Login/PatientLogin';
import DoctorLogin from './component/Login/DoctorLogin';
import PatientHome from './component/Patient/PatientHome'
import PatHome from './component/Patient/PatHome'
import PatientGallery from './component/Patient/PatientGallery'
import Doctor from './component/Doctor/Doctor'

import PatientReg from './component/PatientReg/PatientReg';
import DocHome from './component/Doctor/DocHome';
import DocContact from './component/Doctor/DocContact';



function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/regPatient" component = {PatientReg}/>
      <Route exact path="/patient/login" component={PatientLogin} />
      <Route exact path="/doctors/login" component={DoctorLogin} />
      {/* <Route exact path="/employee/login" component={EmployeeLogin} />
      <Route exact path="/administrator/login" component={AdministratorLogin} /> */}


      <Route exact path="/patient/login/patient_home" component = {PatientHome} />
      <Route exact path="/patient/login/home" component = {PatHome} />
      <Route exact path="/patient/login/gallery" component = {PatientGallery} />
      
      
      <Route exact path="/doctors/login/doctor_home" component = {Doctor} />
      <Route exact path="/doctors/login/home" component = {DocHome} />
      <Route exact path="/doctors/login/contact" component = {DocContact}/>

    </Router>
    </div>
  );
}

export default App;
