import React, { useState } from 'react';

const RegisterPatient = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        address: '',
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
        <>
        <div className="register-body">
            <div className="register-patient">
                <div className='register-title'><h2>Register as Patient</h2></div>
                <div className="register-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder='Name' id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder='Age' id="age" name="age" value={formData.age} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder='Phone No.' id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <textarea id="address" placeholder='Address' name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder='Password' id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                    </form>
                </div>
                        <div className='go-to-login'>                
                            <button type="submit">Register</button>
                        </div>
            </div>
        </div>
        </>
    )

}

export default RegisterPatient