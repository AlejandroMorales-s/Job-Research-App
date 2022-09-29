import React, { useState} from 'react';
import Form from './Form';
import DocumentTitle from 'react-document-title';
import SignUp from './SignUp';

export default function Login() {
    const [form, setForm] = useState(true);

    const toggle = () => {
        setForm(!form);
    }

    return (
        <div>
            <DocumentTitle title={form ? "devJobs | Login" : "devJobs | SignUp"}/>
            <div className='logo-form'>
                <h1 className='logo'>devJobs<span className='logo-span'>()</span></h1>
            </div>
            <div className='form-container'>
                {form ? 
                <>
                    <p className='align-text bold'>Login</p> 
                    <Form/>
                    <button onClick={toggle} className='login-signup'>You don't have account? Sign Up here</button>
                </> 
                : 
                <>
                    <p className='align-text bold'>SignUp</p> 
                    <SignUp/>
                    <button onClick={toggle} className='login-signup'>You have account? Login</button>
                </>
                }
            </div>
        </div>
    )
}
