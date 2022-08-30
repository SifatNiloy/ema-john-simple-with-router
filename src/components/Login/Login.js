import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>This is login</h2>
                <div className='input-group'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" />
                </div>
            </div>
        </div>
    );
};

export default Login;