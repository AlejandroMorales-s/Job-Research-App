import React from 'react';
import Form from './Form';
import DocumentTitle from 'react-document-title';

export default function Login() {
    return (
        <div>
            <DocumentTitle title="devJobs | Login"/>
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
