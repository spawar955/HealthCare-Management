import React, { useState, useEffect } from 'react';

const ViewPatients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const samplePatients = [
            { id: 1, name: 'John Doe', age: 30, gender: 'Male', lastVisit: '2023-03-10' },
            { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', lastVisit: '2023-03-12' },
        ];
        setPatients(samplePatients);
    }, []);

    return (
        <div className="view-patients">
            <h2>View Patients</h2>
            <div className="patient-list">
                {patients.map((patient, index) => (
                    <div key={index} className="patient">
                        <div><strong>Name:</strong> {patient.name}</div>
                        <div><strong>Age:</strong> {patient.age}</div>
                        <div><strong>Gender:</strong> {patient.gender}</div>
                        <div><strong>Last Visit:</strong> {patient.lastVisit}</div>
                    </div>
                ))}
                {patients.length === 0 && <div>No patients available.</div>}
            </div>
        </div>
    );
};

export default ViewPatients;
