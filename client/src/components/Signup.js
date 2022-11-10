import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';

import './App.css';
import { showErrorMsg,showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import {signup} from '../api/auth';
// import { response } from 'express';
const Signup = () => {
    const [formData, setFormData] = useState({
        username: 'hassan',
        email: 'hassan@gmail.com',
        password: '123',
        password2: '123',
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    const {username, email, password, password2, successMsg, errorMsg, loading} = formData;
    // Event handler
    const handleChange = evt =>{
        // console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',
            successMsg: ''
        })
    }

    const handleSubmit = evt =>{
        evt.preventDefault();
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
            setFormData({
                ...formData, errorMsg: "All fields are required"
            });
        }  else if(!isEmail(email)){
            setFormData({
                ...formData, errorMsg: "Invalid email"
            });
        } else if(!equals(password, password2)){
            setFormData({
                ...formData, errorMsg: "Passwords do not match"
            });
        } else {
            const {username, email, password} = formData;
            const data = {username, email, password};
            setFormData({...formData, loading: true});
            signup(data)
                .then((response)=>{
                    console.log(response);
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage,
                    })
                })
                .catch(err=>{
                    console.log("Axios signup error: ", err);
                    setFormData({...formData, loading: false, errorMsg: err.response.data.errorMessage})
                })
        }
    }

    return (
        <>
            <div className="signup-container">
                <div className="row px-3 vh-100">
                    <div className="col-md-5 mx-auto align-self-center">
                        <form className="row g-3" onSubmit={handleSubmit} noValidate>
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}
                            {loading && showLoading()}
                            <div className="col-md-6">
                                <label htmlFor="inputUsername" className="form-label">UserName</label>
                                <input value={username} name='username' onChange={handleChange} type="text" className="form-control" id="inputUsername" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input value={email} name='email' onChange={handleChange} type="email" className="form-control" id="inputEmail" />
                            </div>

                            <div className="col-12">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input value={password} name='password' onChange={handleChange} type="password" className="form-control" id="inputPassword" placeholder="Enter you password" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input value={password2} name='password2' onChange={handleChange} type="password" className="form-control" id="confirmPassword" placeholder="Enter you confirm password" />
                            </div>



                            <div className="col-md-6">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                            <div className="col-md-6">
                                <p style={{color:'white'}}>Already have an account! <Link to='/signin'>Sign In</Link></p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
