import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import Confirmation from './Components/Confirmation/Confirmation';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import Appointments from './Components/Appointments/Appointments';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import ProfileCard from './Components/ProfileCard/ProfileCard';

import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  // Debug: Log appointments whenever it updates to ensure state reflects booked appointments
  console.log('Current Appointments:', appointments);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar appointments={appointments} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/instant-consultation"
            element={<InstantConsultation setAppointments={setAppointments} />}
          />
          <Route path="/finddoctorsearch" element={<FindDoctorSearch />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route
            path="/appointments"
            element={<Appointments appointments={appointments} setAppointments={setAppointments} />}
          />
          <Route path="/reports" element={<ReportsLayout />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/review-form" element={<ReviewForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;