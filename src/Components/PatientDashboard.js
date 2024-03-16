import React from 'react' 

const PatientDashboard = () => {
    return (
        <>
        <div className="patient-dashboard">
            <h2 style={{marginBottom:'5%'}}>Welcome to Your Patient Dashboard</h2>
            <div className="dashboard-options">
                <div className="option">
                    <h3>View Medical History</h3>
                    <p>View your medical records and history.</p>
                </div>
                <div className="option">
                    <h3>Book Appointment</h3>
                    <p>Schedule an appointment with your doctor.</p>
                </div>
                <div className="option">
                    <h3>Choose Your Doctor</h3>
                    <p>Explore and select your preferred doctor.</p>
                </div>
            </div>
        </div>
        </>
    )

}

export default PatientDashboard 