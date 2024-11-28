import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Appointments.css';

const Appointments = ({ appointments, setAppointments }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem("auth-token");

  return (
    <div className="appointments-container">
      {!isLoggedIn ? (
        <div>
          <h2>You are not logged in.</h2>
          <button
            className="btn1"
            onClick={() => navigate('/login')}
            style={{ backgroundColor: '#3685fb', color: '#fff' }}
          >
            Log In
          </button>
        </div>
      ) : appointments.length === 0 ? (
        <div>
          <h2>You don't have any appointments booked yet.</h2>
          <Link to="/instant-consultation">
            <button className="btn1" style={{ backgroundColor: 'blue', color: 'white' }}>Book one</button>
          </Link>
        </div>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <h3>Appointment with {appointment.doctor.name}</h3>
            <p>Speciality: {appointment.doctor.speciality}</p>
            <p>Experience: {appointment.doctor.experience} years</p>
            <p>Ratings: {appointment.doctor.ratings}</p>
            <p>Name: {appointment.name}</p>
            <p>Phone Number: {appointment.phoneNumber}</p>
            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
            <p>Time: {appointment.timeSlot}</p>
            <button
              className="btn1"
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={() => handleCancelAppointment(appointment.id)}
            >
              Cancel Appointment
            </button>
          </div>
        ))
      )}
    </div>
  );

  function handleCancelAppointment(id) {
    setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
  }
};

export default Appointments;