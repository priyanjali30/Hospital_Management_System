import React, { useEffect, useState } from 'react'
import Navber from '../Navber/Navber';
import { getDatabase, ref, get, child } from 'firebase/database'
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom'

const PatientLogin = () => {
  const [userData, setuserData] = useState({
    email: '',
    password: ''
  })
  const [alluser, setalluser] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    get(child(ref(getDatabase()), `users`))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setalluser(e => [...e, { ...childSnapshot.val(), id: childSnapshot.key }])
        })
      }).catch((error) => {
        console.error(error);
      });
  }, [])

  function onChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()

    var ss = alluser.filter((s) => {
      return s.email === userData.email && s.password === userData.password
    })
    if (ss.length > 0) {
      toast.success("Singup Successfully Done !!!")
      localStorage.setItem("user", JSON.stringify(ss[0]))
      setLoading(true)
    } else {
      toast.error('Incorrect Id or Password !!!')
    }
  }

  return (
    <div className="body">
      <Navber />
      <ToastContainer />
      {loading ? <Redirect to="/patient/login/patient_home" /> : null}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={onSubmit}>
              <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please sign in as Patient</h1>
              <div className="form-group btn-rg">
                <label htmlFor="email" >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={userData.email}
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
                  value={userData.password}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block mb-5"
                href="/patient/login/patient_home"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div className="reg ml-5"> <h5 className="btn-rg">Don't have any account <a href="/regPatient">Register Here</a></h5> </div>
      </div>

      <div className="mb-5 mt-5">v</div>

    </div>
  );
};

export default PatientLogin;