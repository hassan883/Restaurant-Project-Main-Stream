import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';
const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
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
        })
    }

    const handleSubmit = evt =>{
        evt.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <div className="signup-container">
                <div className="row px-3 vh-100">
                    <div className="col-md-5 mx-auto align-self-center">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label for="inputUsername" className="form-label">UserName</label>
                                <input value={username} name='username' onChange={handleChange} type="text" className="form-control" id="inputUsername" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail" className="form-label">Email</label>
                                <input value={email} name='email' onChange={handleChange} type="email" className="form-control" id="inputEmail" />
                            </div>

                            <div className="col-12">
                                <label for="inputPassword" className="form-label">Password</label>
                                <input value={password} name='password' onChange={handleChange} type="password" className="form-control" id="inputPassword" placeholder="Enter you password" />
                            </div>
                            <div className="col-12">
                                <label for="confirmPassword" className="form-label">Confirm Password</label>
                                <input value={password2} name='password2' onChange={handleChange} type="password" className="form-control" id="confirmPassword" placeholder="Enter you confirm password" />
                            </div>



                            <div className="col-md-6">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                            <div className="col-md-6">
                                <p style={{color:'black'}}>Already have an account! <Link to='/signin'>Sign In</Link></p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
