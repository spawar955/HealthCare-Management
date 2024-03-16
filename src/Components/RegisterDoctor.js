import React, { useState } from 'react';

const RegisterDoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        education: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="register-body">
            <div className="register-doctor">
                <div className='register-title'><h2>Register as Doctor</h2></div>
                <div className="register-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder='Name' id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Experience' id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Education' id="education" name="education" value={formData.education} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder='Phone No.' id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder='Password' id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className='go-to-register'>
                            <button type="submit"><a href='/DoctorDashboard'>Register</a></button>
                        </div>
                        <div className="end-message">
                            Already have an account? <a href='/LoginDoctor'>Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterDoctor 