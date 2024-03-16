import React, { useState } from 'react';

const LoginDoctor = () => {
    const [formData, setFormData] = useState({
        email: '',
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
        <div className="login-body">
            <div className="login-patient">
                <div className='login-title'><h2>Login as Doctor</h2></div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="email" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder='Password' id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className='go-to-register'>
                            <button type="submit"><a href='/DoctorDashboard'>Login</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default LoginDoctor 