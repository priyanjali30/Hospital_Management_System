import React, { useState, useEffect } from 'react'
import Navber from '../Navber/Navber';
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { toast, ToastContainer } from 'react-toastify'
import { Redirect } from 'react-router-dom'

const DoctorLogin = () => {
  const [logindata, setlogindata] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const db = getDatabase();

  function onChange(e) {
    setlogindata({ ...logindata, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const starCountRef = ref(db, 'number');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data == 1) {
        localStorage.setItem("doctor", JSON.stringify({
          "name": "Dr. Disha Dey",
          "role": "Chemotherapy Specialist"
        }))
        setLoading(true)
      } else {
        localStorage.removeItem('doctor')
        setLoading(false)
      }
    });
  }, [])

  const Push = (e) => {
    e.preventDefault()
    if (logindata.email === "check@gmail.com" && logindata.password === "abc123") {
      set(ref(db, 'number'), 1);
      toast.success("Login Successfully Done !!!")
    } else {
      toast.error("Incorrect id or password !!!")
    }
  }

  return (
    <div className="body">
      {loading ? <Redirect to="/doctors/login/doctor_home" /> : null}
      <ToastContainer />
      <Navber />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={Push} >
              <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please sign in as Doctor</h1>
              <div className="form-group btn-rg">
                <label htmlFor="email" >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={logindata.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group btn-rg">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={logindata.password}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block mb-5"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mb-5 mt-5">v</div>

    </div>
  );
};

export default DoctorLogin;