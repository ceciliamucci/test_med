import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

