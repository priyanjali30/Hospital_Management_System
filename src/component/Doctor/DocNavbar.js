import React,{useState} from 'react';
import { getDatabase, ref, set } from 'firebase/database'
import '../Navber/Navber.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { toast, ToastContainer } from 'react-toastify'
import {Redirect} from 'react-router-dom'

const DocNavbar = () => {
  const db = getDatabase();
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <ToastContainer />
      {loading ? <Redirect to="/doctors/login" /> : null}
      <Navbar bg="success" text="white" var expand="lg">
        <Navbar.Brand style={{ color: "white" }}>Hosiptal Management Ltd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="text-white" href="/doctors/login/home">Home</Nav.Link>
            <Nav.Link className="text-white" href="/doctors/login/doctor_home">Doctor</Nav.Link>
            <Nav.Link className="text-white" href="/doctors/login/contact">Contact Us</Nav.Link>
            <Nav.Link className="text-white" onClick={() => {
              localStorage.removeItem("docotore")
              set(ref(db, 'number'), 2);
              toast.success("Logout Successfully Done !!!")
              setLoading(true)
            }}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DocNavbar;