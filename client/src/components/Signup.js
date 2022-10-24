import React from 'react';
import './Signup.css';
const Signup = () => {

    return (
        <>
            <div className="signup-container">
                <div className="row px-3 vh-100">
                    <div className="col-md-5 mx-auto align-self-center">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputUsername" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="inputUsername" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" />
                            </div>

                            <div className="col-12">
                                <label for="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Enter you password" />
                            </div>
                            <div className="col-12">
                                <label for="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Enter you confirm password" />
                            </div>


                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
