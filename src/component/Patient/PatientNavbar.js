import React, { useState } from 'react';
import classnames from 'classnames';
import './PatientNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { toast, ToastContainer } from 'react-toastify'
import { Redirect } from 'react-router-dom'

const PatientNavbar = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      {loading ? <Redirect to="/patient/login" /> : null}
      <ToastContainer />
      <Navbar bg="success" text="white" var expand="lg">
        <Navbar.Brand style={{ color: "white" }}>Hosiptal Management Ltd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="text-white" href="/patient/login/home">Home</Nav.Link>
            <Nav.Link className="text-white" href="/patient/login/patient_home">Patient</Nav.Link>
            <Nav.Link className="text-white" href="/patient/login/gallery">Gallery</Nav.Link>
            <Nav.Link className="text-white" onClick={() => {
              localStorage.removeItem("user")
              toast.success("Logout successfully done !!")
              setLoading(true)
            }}>Log Out</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PatientNavbar;