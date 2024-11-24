import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa las dependencias necesarias
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login'; // Asegúrate de tener este componente
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Definir las rutas de la aplicación */}
          <Route path="/" element={<Landing_Page />} /> {/* Ruta principal, página de inicio */}
          <Route path="/landing-page" element={<Landing_Page />} /> {/* Ruta para Home */}
          <Route path="/sign-up" element={<Sign_Up />} /> {/* Ruta para el formulario de registro */}
          <Route path="/login" element={<Login />} /> {/* Ruta para el formulario de login */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


