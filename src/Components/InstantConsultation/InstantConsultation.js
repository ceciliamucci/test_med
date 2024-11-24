import React, { useEffect, useState, useCallback } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from '../FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from '../DoctorCardIC/DoctorCardIC';

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const getDoctorsDetails = useCallback(() => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
            if (searchParams.get('speciality')) {
                const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());
                setFilteredDoctors(filtered);
                setIsSearched(true);
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
        })
        .catch(err => console.log(err));
    }, [searchParams]);

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(doctor => doctor.speciality.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

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

    useEffect(() => {
        getDoctorsDetails();
    }, [getDoctorsDetails]);

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
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched && (
                        <center>
                            <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => (
                                    <DoctorCardIC 
                                        className="doctorcard" 
                                        {...doctor} 
                                        key={doctor.name} 
                                        onAppointment={openModal}
                                    />
                                ))
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </center>
                    )}
                </div>
            </div>
        </center>
    );
}

export default InstantConsultation;