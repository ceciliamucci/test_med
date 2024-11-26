import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Update with actual authentication logic

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
          <Link to="/landingpage">Home</Link>
        </li>
        <li className="link">
          <Link to="/instant-consultation">
            <button className="btn1">Instant Consultation</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/reviews">
            <button className="btn1">Reviews</button>
          </Link>
        </li>
        {isLoggedIn && (
          <li className="link">
            <Link to="/appointments">
              <button className="btn1">Appointments</button>
            </Link>
          </li>
        )}
        <li className="link">
          <Link to="/sign-up">
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/login">
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;