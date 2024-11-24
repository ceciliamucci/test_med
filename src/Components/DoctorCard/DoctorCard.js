import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, ratings, image }) => {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    const handleAppointmentSubmit = (appointmentData) => {
        console.log('Appointment booked:', appointmentData);
        // Handle the appointment submission here
        setShowAppointmentForm(false);
    };

    if (showAppointmentForm) {
        return (
            <AppointmentForm 
                doctorName="Dr. Denis Raj"
                onSubmit={handleAppointmentSubmit}
            />
        );
    }

    return (
        <div className="doctor-card-container">
            <div className="doctor-card-details-container">
                <div className="doctor-card-profile-image-container">
                    <img src={image} alt="Doctor" className="doctor-image" />
                </div>
                <div className="doctor-card-details">
                    <div className="doctor-card-detail-name">{name}</div>
                    <div className="doctor-card-detail-speciality">{speciality}</div>
                    <div className="doctor-card-detail-experience">{experience} years experience</div>
                    <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
                <div>
                    <button 
                        className="book-appointment-btn"
                        onClick={() => setShowAppointmentForm(true)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;