import React from 'react';
import {Link} from 'react-router-dom';

export default function Form() {
    return (
        <>
            <form action="" className='form'>
                <div className='campos-container'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input id='email' className='form-input' type="email" placeholder="Email" />
                </div>

                <div className='campos-container'>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input id='password' className='form-input' type="password" placeholder="Password" />
                    <Link className='form-link' to="/feed">
                        <button className='form-btn' type="submit">Login</button>
                    </Link>
                </div>
            </form>
        </>
    )
}
