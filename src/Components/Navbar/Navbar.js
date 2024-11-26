import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ appointments }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = !!sessionStorage.getItem("auth-token"); // Check if user is logged in
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy<span>.</span>
        </Link>
      </div>
      <div className="nav__icon" onClick={toggleMenu}>
        <i className={`fa fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
      </div>
      <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
        <li className="link">
          <Link to="/landing-page">Home</Link>
        </li>
        <li className="link">
          <Link to="/instant-consultation">
            <button className="btn1">Instant Consultation</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/reviewform">
            <button className="btn1">Reviews</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/appointments">
            <button className="btn1">Appointments</button>
          </Link>
        </li>
        {isLoggedIn ? (
          <li className="link">
            <span>{sessionStorage.getItem('email')}</span>
            <Link to="/profile">
              <button className="btn1 btn-short">Profile</button>
            </Link>
            <button className="btn1 btn-short" onClick={() => {
              sessionStorage.removeItem('auth-token');
              sessionStorage.removeItem('email');
              navigate('/login'); // Redirect to login
            }}>Logout</button>
          </li>
        ) : (
          <li className="link">
            <Link to="/sign-up">
              <button className="btn1">Sign Up</button>
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className="link">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;