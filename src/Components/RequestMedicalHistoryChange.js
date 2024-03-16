import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RequestMedicalHistoryChange = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        otp: ''
    });

    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGetOtp = () => {
        setShowOtpInput(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="request-body">
            <div className="request-medical-history-change">
                <h2>Request Medical History Change</h2>
                <form onSubmit={handleSubmit}>
                    <div className="request-form-group">
                        <input type="text" placeholder='Patient ID' id="patientId" name="patientId" value={formData.patientId} onChange={handleChange} required />
                    </div>
                    {showOtpInput && (
                        <div className="request-form-group">
                            <input type="text" placeholder='OTP' id="otp" name="otp" value={formData.otp} onChange={handleChange} required />
                        </div>
                    )}
                    {!showOtpInput && (
                        <button type="button" onClick={handleGetOtp}>Get OTP</button>
                    )}
                    {showOtpInput && (
                        <Link to="/AddReport">
                            <button type="submit">Add Report</button>
                        </Link>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RequestMedicalHistoryChange;
