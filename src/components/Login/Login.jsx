import React from 'react';
import Form from './Form';

export default function Login() {
    return (
        <div>
            <div className='logo-form'>
                <h1 className='logo'>devJobs<span className='logo-span'>()</span></h1>
            </div>
            <div className='form-container'>
                <p className='align-text bold'>Login / Sign In</p>
                <Form/>
            </div>
        </div>
    )
}
