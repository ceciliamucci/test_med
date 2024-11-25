import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Appointments from './Components/Appointments';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/landingpage" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/finddoctorsearch" element={<FindDoctorSearch />} />
                    <Route path="/booking-consultation" element={<BookingConsultation />} />
                    <Route path="/appointments" element={<Appointments />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;