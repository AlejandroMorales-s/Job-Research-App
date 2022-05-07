import React from 'react';
import Form from './Form';

export default function Login() {
    return (
        <div>
            <h1 className='logo'>Logo</h1>
            <div className='form-container'>
                <p className='align-text bold'>Login / Sign In</p>
                <Form/>
            </div>
        </div>
    )
}
