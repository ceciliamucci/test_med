import React, { useState, useCallback } from 'react';
import './InstantConsultation.css';
import { useNavigate } from 'react-router-dom';
import FindDoctorSearchIC from '../FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCard from '../DoctorCard/DoctorCard';
import Notification from '../Notification/Notification';

// Static data for doctors
const doctorData = [
    {
        id: 1,
        name: "Dr. Jiao Yang",
        speciality: "Dentist",
        experience: 9,
        ratings: "⭐⭐⭐⭐⭐",
        image: "src/doc-img1.png",
        availability: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 2,
        name: "Dr. Denis Raj",
        speciality: "Dentist",
        experience: 24,
        ratings: "⭐⭐⭐⭐⭐",
        image: "src/doc-img2.png",
        availability: ["Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 3,
        name: "Dr. Lyn Christie",
        speciality: "Dentist",
        experience: 11,
        ratings: "⭐⭐⭐⭐⭐",
        image: "src/doc-img3.png",
        availability: ["Monday", "Tuesday", "Friday"]
    },
];

const InstantConsultation = () => {
    const [doctors, setDoctors] = useState(doctorData);
    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [currentAppointment, setCurrentAppointment] = useState(null);
    const navigate = useNavigate();

    // Search functionality
    const handleSearch = useCallback((searchTerm) => {
        setDoctors(doctorData.filter(doctor =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }, []);

    const handleAppointment = () => {
        if (!name.trim() || !phoneNumber.trim() || !selectedDoctor) {
            alert('Please fill in all fields');
            return;
        }

        const appointmentData = {
            id: Date.now(),
            doctor: selectedDoctor,
            phoneNumber,
            date: new Date().toISOString(),
            status: 'Pending',
        };

        setAppointments(prevAppointments => [...prevAppointments, appointmentData]);
        setCurrentAppointment(appointmentData);
        setShowNotification(true);

        navigate('/confirmation', {
            state: {
                appointment: appointmentData,
                message: `Appointment booked successfully with ${selectedDoctor.name}`,
            },
        });
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

    // Get available appointments
    const getAvailableAppointments = useCallback((doctorId) => {
        return appointments.filter(apt => apt.doctor.id === doctorId);
    }, [appointments]);

    return (
        <center>
            {showNotification && currentAppointment && (
                <Notification appointment={currentAppointment} isCancelled={false} />
            )}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>Book Appointment with {selectedDoctor?.name}</h2>
                            <button className="close-button" onClick={closeModal}>&times;</button>
                        </div>
                        <div className="modal-content">
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    type="tel"
                                    className="input-field"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            {selectedDoctor && (
                                <div className="doctor-availability">
                                    <p>Available on: {selectedDoctor.availability.join(', ')}</p>
                                </div>
                            )}
                            <button className="book-button" onClick={handleAppointment}>Book Now</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    <h2>{doctors.length} doctors are available</h2>
                    <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                    {doctors.map(doctor => (
                        <DoctorCard
                            key={doctor.id}
                            {...doctor}
                            onAppointment={() => openModal(doctor)}
                            appointments={getAvailableAppointments(doctor.id)}
                        />
                    ))}
                </div>
            </div>
        </center>
    );
}

export default InstantConsultation;