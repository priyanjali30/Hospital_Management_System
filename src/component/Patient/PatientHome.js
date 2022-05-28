import React, { useState } from 'react';
import Navber from './PatientNavbar';
import Footer from '../Footer';
import doc_img from './doctor1.jpg';
import 'mdbreact';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PatientHome = () => {
  const data = JSON.parse(localStorage.getItem("user"))
  const [patientData, setpatientData] = useState({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    address: data.address,
    phone_no: data.phone_no,
    disease: data.disease,
    assignDoctor: data.assignDoctor
  })

  return (
    <div className="bg-dark">
      <Navber />
      <h2 className="text-white my-3" align="center">Patient Home</h2>
      <h3 className="text-white my-3" align="center">Welcome!</h3>

      <Row>
        <Col>
          <Row>
            <div className="col">
              <div className="container ml-3">
                <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
                  <div className="col-sm-6">
                    <h2 className="text-primary">Patient Information</h2>
                  </div>
                  <br />

                  <table className="table col-md-6" >
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>
                          {patientData.first_name} {patientData.last_name}
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{patientData.email}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{patientData.address}</td>
                      </tr>
                      <tr>
                        <td>Phone number</td>
                        <td>{patientData.phone_no}</td>
                      </tr>
                      <tr>
                        <td>Disease</td>
                        <td>{patientData.disease}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </Row>
        </Col>
        <Col>
          <div className="col ">
            <br />
            <br />
            <div className="card card-cascade narrower mr-3" style={{ backgroundColor: "#e0e0e0" }}>
              <h2 className="text-primary card-body card-body-cascade text-center mt-3  ">Doctor Information</h2>

              <Image width={520} height={760} className="img-responsive center-block my-5" src={doc_img} thumbnail />

              <div className="card-body card-body-cascade text-center">


                <h4 className="card-title"><strong>{patientData.assignDoctor} </strong></h4>

                <h5 className="blue-text pb-2"><strong>{patientData.specialist}</strong></h5>

                <p className="card-text">The doctor currently assigned to the patient</p>

              </div>

            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default PatientHome;