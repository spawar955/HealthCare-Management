import React, { useState, useEffect } from 'react';

const ViewMedicalHistory = () => {
    const [medicalHistory, setMedicalHistory] = useState([]);

    useEffect(() => {
        const sampleData = [
            { date: '2023-01-15', doctor: 'Dr. Smith', diagnosis: 'Flu', prescription: 'Rest and plenty of fluids' },
            { date: '2023-02-05', doctor: 'Dr. Johnson', diagnosis: 'Sinusitis', prescription: 'Antibiotics and nasal spray' },
            // Add more sample medical history entries as needed
        ];
        setMedicalHistory(sampleData);
    }, []);

    return (
        <div className="view-medical-history">
            <h2>View Medical History</h2>
            <div className="medical-history-list">
                {medicalHistory.map((record, index) => (
                    <div key={index} className="medical-record">
                        <div><strong>Date:</strong> {record.date}</div>
                        <div><strong>Doctor:</strong> {record.doctor}</div>
                        <div><strong>Diagnosis:</strong> {record.diagnosis}</div>
                        <div><strong>Prescription:</strong> {record.prescription}</div>
                    </div>
                ))}
                {medicalHistory.length === 0 && <div>No medical history available.</div>}
            </div>
        </div>
    );
};

export default ViewMedicalHistory;
