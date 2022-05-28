
import React, { useState } from 'react';
import Navber from '../Navber/Navber';
import Footer from '../Footer';
import { getDatabase, ref, set } from 'firebase/database'
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom'

const PatientReg = () => {

  const [regiserState, setregisterState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: '',
    phone_no: '',
    disease: '',
    assignDoctor: ""
  })
  const { first_name, last_name, email, password, address,
    phone_no, disease, assignDoctor
  } = regiserState
  const db = getDatabase();
  const [loading, setLoading] = useState(false)

  function onChange(e) {
    setregisterState({ ...regiserState, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      address: address,
      phone_no: phone_no,
      disease: disease,
      assignDoctor: assignDoctor
    }
    Math.floor(Math.random() * 10);
    set(ref(db, 'users/' + Math.floor(Math.random() * 10000000)), newUser)
      .then(() => {
        toast.success("Pateint Register successfully ")
        setLoading(true)
      })
      .catch((error) => {
        // The write failed...
        toast.error("Something went wrong !!!")
      });
  }

  return (
    <div className="body">
      {loading ? <Redirect to="/patient/login" /> : null}
      <ToastContainer />
      <Navber />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={onSubmit} >
              <h1 className="h3 mb-3 font-weight-normal btn-rg">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={first_name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={last_name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter your Resident Address"
                  value={address}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone_no"
                  placeholder="Enter your Phone Number"
                  value={phone_no}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Disease</label>
                <input
                  type="text"
                  className="form-control"
                  name="disease"
                  placeholder="Enter your disease"
                  value={disease}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Disease</label>
                <input
                  type="text"
                  className="form-control"
                  name="disease"
                  placeholder="Enter your disease"
                  value={disease}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <select className='form-conrol' name='assignDoctor' value={assignDoctor} onChange={onChange}>
                  <option value="">Select Doctor</option>
                  <option value="Dr. Disha Dey">Dr. Disha Dey</option>
                  <option value="Dr. Mohit Sing">Dr. Mohit Sing</option>
                  <option value="Dr. Trilok Panwar">Dr. Trilok Panwar</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatientReg;