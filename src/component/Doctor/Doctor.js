import React, { useState, useEffect } from 'react';
import Navber from './DocNavbar';
import Footer from '../Footer';
import 'mdbreact';
import { getDatabase, ref, get, child } from 'firebase/database'

const Doctor = () => {
  const [doctorData, setdoctorData] = useState({
    first_name: "Dr. Disha",
    last_name: "Dey",
    email: "drdishadey@gmai.com",
    address: "JIIT-62",
    phone_no: "78952*****",
    salary: '1000 per visit',
    shift_time: '10:00 AM to 8:00 PM',
    specialisation: 'Chemotherapy'
  })

  const [patients, setpatients] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    get(child(ref(getDatabase()), `users`))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setpatients(e => [...e, { ...childSnapshot.val(), id: childSnapshot.key }])
        })
        setisLoading(false)
      }).catch((error) => {
        console.error(error);
      });
  }, [])



  return (
    <div className="bg-dark">
      <Navber />
      <br />
      <h2 className="text-white" align="center">Doctor</h2>
      <h3 className="text-white" align="center">Welcome!</h3>
      <br></br>

      <div className="row">
        <div className="col">
          <div className="container ml-3">
            <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
              <div className="col-sm-6">
                <h2 className="text-primary">Doctor Information</h2>
              </div>
              <br />

              <table className="table col-md-6" >
                <tbody>
                  <tr>
                    <td> Name</td>
                    <td>
                      {doctorData.first_name} {doctorData.last_name}
                    </td>
                  </tr>
                  <tr>
                    <td>Specialization</td>
                    <td>{doctorData.specialisation}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{doctorData.email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{doctorData.address}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>{doctorData.phone_no}</td>
                  </tr>
                  <tr>
                    <td>Salary Information</td>
                    <td>{doctorData.salary}</td>
                  </tr>

                  <tr>
                    <td>Shift Time</td>
                    <td>{doctorData.shift_time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col mr-3">
          <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
            <h2 className="text-primary">Patients Assigned</h2>
            <br />
            <div className="list-group-flush" style={{ backgroundColor: "#e0e0e0" }}>
              {!isLoading ? patients.map(patient => {
                if (patient.assignDoctor === "Dr. Disha Dey")
                  return (
                    <div key={patient.id} className="list-group-item" style={{ backgroundColor: "#e0e0e0" }}>
                      <p className="mb-0" style={{ backgroundColor: "#e0e0e0" }}>Patient Id : {patient.id}</p>
                      <p className="mb-0" style={{ backgroundColor: "#e0e0e0" }}>Patient Name : {patient.first_name} {patient.last_name} </p>
                      <p className="mb-0" style={{ backgroundColor: "#e0e0e0" }}>Patient Contact no. : {patient.phone_no}</p>
                      <p className="mb-0" style={{ backgroundColor: "#e0e0e0" }}>Patient disease : {patient.disease} </p>
                      <p className="mb-0" style={{ backgroundColor: "#e0e0e0" }}>Patient Email : {patient.email}</p>
                    </div>
                  )
              }) : <h4>Loading</h4>}
            </div>

          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Doctor;