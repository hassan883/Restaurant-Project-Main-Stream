import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { signin } from '../api/auth';





const Signin = () => {
    const [formData, setFormData] = useState({
        email: 'hassan@gmail.com',
        password: '123123',
        errorMsg: false,
        loading: false,
        redirectToDashboard: false
    });
    const { email, password, errorMsg, loading, redirectToDashboard } = formData;
    // Event handler
    const handleChange = evt => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',

        })
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData, errorMsg: "All fields are required"
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData, errorMsg: "Invalid email"
            });
        } else {
            const { email, password } = formData;
            const data = { email, password };
            setFormData({ ...formData, loading: true });
            signin(data);

        }

    }




    return (
        <div className="signin-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    <form className="row g-3" onSubmit={handleSubmit} noValidate>
                        {errorMsg && showErrorMsg(errorMsg)}
                        {loading && showLoading()}

                        <div className="col-12">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input value={email} name='email' onChange={handleChange} type="email" className="form-control" id="inputPassword" placeholder="Enter you Email" />
                        </div>

                        <div className="col-12">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input value={password} name='password' onChange={handleChange} type="password" className="form-control" id="inputPassword" placeholder="Enter you password" />
                        </div>




                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="col-md-6">
                            <p style={{ color: 'white' }}>Don't have an account! <Link to='/signup'>Register here</Link></p>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;
