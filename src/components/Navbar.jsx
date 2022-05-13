import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';

export default function Navbar() {

    const profile = <FontAwesomeIcon className='profile' icon={ faUser } />

    return (
        <div className='nav-bg'>
            <div className='nav-container container'>
                <NavLink to="/feed">
                    <h1 className='logo'>devJobs<span className='logo-span'>()</span></h1>
                </NavLink>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-link">
                            <NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'} to="/feed">
                                Feed
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'} to="/favorites">
                                Favorites
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'} to="/applied">
                                Applied Jobs
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='profile-img'>
                    { profile }
                </div>
            </div>
        </div>
    )
}
