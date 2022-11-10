import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';




const Signin = ()=> {
    const [formData, setFormData] = useState({
        email: 'hassan@gmail.com',
        password: '123123',
        errorMsg: false,
        loading: false,
        redirectToDashboard: false
    });
    const {email, password, errorMsg, loading, redirectToDashboard} = formData;
     // Event handler
    const handleChange = evt =>{

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',

        })
    }
    const handleSubmit = evt =>{
        evt.preventDefault();

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
                                <p style={{color:'white'}}>Don't have an account! <Link to='/signup'>Register here</Link></p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
}

export default Signin;
