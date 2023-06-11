import React, { useState } from 'react';
import NavDonor from './NavDonor';
import Carouseld from './Carouseld';
import './DonorForm.css';
import { Toast, ToastContainer, Button } from 'react-bootstrap';

const Donor = () => {
  const [bloodBank, setBloodBank] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [showAppToast, setShowGuideToast] = useState(false);

  const handleBloodBankChange = (event) => {
    setBloodBank(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleAppClick = () => {
    if (bloodBank && date && time && bloodGroup) {
      setShowGuideToast(true);
    } else {

    }
  };


  const handleCloseAppToast = () => {
    setShowGuideToast(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setBloodBank('');
    setDate('');
    setTime('');
    setBloodGroup('');
  };

  return (
    <div>
      <div>
        <NavDonor />
      </div>
      <center><h1>Book your Appointment</h1></center>
      <div><Carouseld />
        <center>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="bloodBank">Blood Bank:</label>
              <select id="bloodBank" value={bloodBank} onChange={handleBloodBankChange} required>
                <option value="">Select a Blood Bank</option>
                <option value="bank1">C. Sanjeevini Blood Bank</option>
                <option value="bank2">Aaraadhya Blood Center</option>
                <option value="bank3">Srikara Hospital Blood Centre</option>
                <option value="bank4">Deccan's Blood Centre</option>
                <option value="bank5">Sri Balaji Blood Bank</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" value={date} onChange={handleDateChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" value={time} onChange={handleTimeChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select id="bloodGroup" value={bloodGroup} onChange={handleBloodGroupChange} required>
                <option value="">Select a Blood Group</option>
                <option value="group1">A+</option>
                <option value="group2">O+</option>
                <option value="group3">B+</option>
                <option value="group4">A-</option>
                <option value="group5">B-</option>
                <option value="group6">AB-</option>
              </select>
            </div>
            <button type="submit" className="submit-button" onClick={handleAppClick}>Book Appointment</button>
            <ToastContainer position="bottom-end" className="p-3">

              <Toast show={showAppToast} onClose={handleCloseAppToast}>
                <Toast.Header closeButton>
                  <strong className="me-auto">Appointment</strong>
                </Toast.Header>
                <Toast.Body>
                  Appointment booked successfully!
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Donor;