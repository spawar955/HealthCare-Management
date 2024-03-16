import React, { useState } from 'react';

const AddReport = () => {
    const [reportData, setReportData] = useState({
        patientId: '',
        date: '',
        doctor: '',
        diagnosis: '',
        prescription: ''
    });

    const handleChange = (e) => {
        setReportData({ ...reportData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(reportData);
        setReportData({
            patientId: '',
            date: '',
            doctor: '',
            diagnosis: '',
            prescription: ''
        });
    };

    return (
        <div className="add-report-page">
        <div className="add-report">
            <h2>Add Report</h2>
            <form onSubmit={handleSubmit}>
                <div className="addreport-form-group">
                    <input type="text" id="patientId" placeholder='Patient ID'  name="patientId" value={reportData.patientId} onChange={handleChange} required />
                </div>
                <div className="addreport-form-group">
                    <input type="date" id="date" placeholder='Date' name="date" value={reportData.date} onChange={handleChange} required />
                </div>
                <div className="addreport-form-group">
                    <input type="text" id="doctor" placeholder='Doctor' name="doctor" value={reportData.doctor} onChange={handleChange} required />
                </div>
                <div className="addreport-form-group">
                    <input type="text" id="diagnosis" placeholder='Diagnosis' name="diagnosis" value={reportData.diagnosis} onChange={handleChange} required />
                </div>
                <div className="addreport-form-group">
                    <textarea id="prescription" placeholder='Prescription' name="prescription" value={reportData.prescription} onChange={handleChange} required />
                </div>
            </form>
            <div className='go-to-login'>
                <button type="submit">Submit</button>
            </div>
        </div>
        </div>
    );
};

export default AddReport;
