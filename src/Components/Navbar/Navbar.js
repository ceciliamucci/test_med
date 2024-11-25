import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const isLoggedIn = false; // Update with actual authentication logic

    return (
        <div>
            <nav>
                <div className="nav__logo">
                    <Link to="/">StayHealthy</Link>
                </div>
                <ul className="nav__links active">
                    <li className="link">
                        <Link to="/landingpage">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/instant-consultation">
                            <button className="btn1">Instant Consultation</button>
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
        </div>
    );
}

export default Navbar;

