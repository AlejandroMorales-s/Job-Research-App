import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

export default function Navbar() {

    const profile = <FontAwesomeIcon className='profile' icon={ faUser } />

    return (
        <div className='nav-bg'>
            <div className='nav-container container'>
                <Link to="/feed">
                    <h1 className='logo'>devJobs<span className='logo-span'>()</span></h1>
                </Link>
                <nav className="nav">
                    <Link to="/feed">
                        <p className='nav-link'>Feed</p>
                    </Link>
                    <Link to="/favorites">
                        <p className='nav-link'>Favorites</p>
                    </Link>
                </nav>
                <div className='profile-img'>
                    { profile }
                </div>
            </div>
        </div>
    )
}
