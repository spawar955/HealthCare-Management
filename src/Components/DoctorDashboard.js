import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
    return (
        <div className="doctor-dashboard">
            <h2 style={{ marginBottom: '5%' }}>Welcome to Your Doctor Dashboard</h2>
            <div className="doctor-options">
                <Link to="/ViewPatients" className="doctor-option" style={{ textDecoration: 'none' }}>
                    <h3>View Patients</h3>
                    <p>View your patients and their medical records.</p>
                </Link>
                <Link to="/RequestMedicalHistoryChange" className="doctor-option" style={{ textDecoration: 'none' }}>
                    <h3>Add Patient</h3>
                    <p>Request changes to a patient's medical history.</p>
                </Link>
            </div>
        </div>

    )

}

export default DoctorDashboard 