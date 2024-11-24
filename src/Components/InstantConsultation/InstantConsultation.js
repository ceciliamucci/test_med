import React, { useEffect, useState, useCallback } from 'react';
import './InstantConsultation.css';
import { useNavigate } from 'react-router-dom';
import FindDoctorSearchIC from '../FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCard from '../DoctorCard/DoctorCard';

const InstantConsultation = () => {
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    // Sample doctor data
    const doctorData = [
        {
            name: "Dr. Jiao Yang",
            speciality: "Dentist",
            experience: 9,
            ratings: "⭐⭐⭐⭐⭐",
            image: "src/doc-img1.png" // Replace with actual image path
        },
        {
            name: "Dr. Denis Raj",
            speciality: "Dentist",
            experience: 24,
            ratings: "⭐⭐⭐⭐⭐",
            image: "src/doc-img2.png" // Replace with actual image path
        },
        {
            name: "Dr. Lyn Christie",
            speciality: "Dentist",
            experience: 11,
            ratings: "⭐⭐⭐⭐⭐",
            image: "src/doc-img3.png" // Replace with actual image path
        },
    ];

    const handleAppointment = () => {
        const appointmentData = { name, phoneNumber, doctor: selectedDoctor };
        setAppointments([...appointments, appointmentData]);
        navigate('/confirmation');
        closeModal();
    };

    const openModal = (doctor) => {
        setSelectedDoctor(doctor);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedDoctor(null);
        setName('');
        setPhoneNumber('');
    };

    return (
        <center>
            {showModal && (
                <div className="modal-container">
                    <h2>Book Appointment with {selectedDoctor?.name},</h2>
                    <div className="modal-content">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            className="input-field" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Phone Number:</label>
                        <input 
                            type="text" 
                            className="input-field" 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button className="book-button" onClick={handleAppointment}>Book Now</button>
                    </div>
                </div>
            )}
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={() => {}} />
                <div className="search-results-container">
                    <h2>{doctorData.length} doctors are available</h2>
                    <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                    {doctorData.map(doctor => (
                        <DoctorCard 
                            {...doctor} 
                            key={doctor.name} 
                            onAppointment={openModal} // Pass the openModal function
                        />
                    ))}
                </div>
            </div>
        </center>
    );
}

export default InstantConsultation;