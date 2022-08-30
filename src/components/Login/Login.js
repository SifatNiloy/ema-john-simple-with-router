import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>This is login</h2>
                <form action="">
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="login" />
                </form>
                <p>
                    new to ema john?? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;