import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, speciality, experience, ratings, image, onAppointment }) => {
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
                    <button className='book-appointment-btn' onClick={onAppointment}>
                        <div>Book Appointment</div>
                        <div>No Booking Fee</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;

