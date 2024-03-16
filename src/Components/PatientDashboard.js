import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
    return (
        <div className="patient-dashboard">
            <h2 style={{ marginBottom: '5%' }}>Welcome to Your Patient Dashboard</h2>
            <div className="patient-option" style={{cursor:'pointer'}}>
                <Link to="/ViewMedicalHistory" className="options" style={{ textDecoration: 'none' }}>
                    <h3>View Medical History</h3>
                    <p>View your medical records and history.</p>
                </Link>
            </div>
        </div>
    );
};

export default PatientDashboard;
