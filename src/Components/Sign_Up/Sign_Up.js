import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./Sign_Up.css";

const SignUp = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Validar que solo sean dígitos y máximo 10 caracteres
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede manejar el proceso del formulario (e.g., enviar datos a una API)
    console.log("Form submitted with phone:", phone);
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: "left" }}>
          Already a member?{" "}
          <Link to="/login" style={{ color: "#2190FF" }}>
            Login
          </Link>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                value={phone}
                onChange={handlePhoneChange}
              />
              {phone.length > 0 && phone.length < 10 && (
                <span style={{ color: "red" }}>
                  Phone number must be 10 digits
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
