import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa las dependencias necesarias
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login'; // Asegúrate de tener este componente
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'; // Import the component
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation'; // Import the new BookingConsultation component
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* Definir las rutas de la aplicación */}
                    <Route path="/" element={<LandingPage />} /> {/* Ruta principal, página de inicio */}
                    <Route path="/landing-page" element={<LandingPage />} /> {/* Ruta para Home */}
                    <Route path="/sign-up" element={<SignUp />} /> {/* Ruta para el formulario de registro */}
                    <Route path="/login" element={<Login />} /> {/* Ruta para el formulario de login */}
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/finddoctorsearch" element={<FindDoctorSearch />} />
                    <Route path="/booking-consultation" element={<BookingConsultation />} /> {/* Ruta para BookingConsultation */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

