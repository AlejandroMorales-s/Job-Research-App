import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
import { GlobalContext } from '../App';

export default function Navbar() {
    const {auth} = useContext(GlobalContext)

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
                <div className='profile-container'>
                    {auth.logged&&<p>Welcome <span className='bold'>{auth.name}</span>!</p>}
                    <div className='profile-img'>
                        { profile }
                    </div>
                </div>
            </div>
        </div>
    )
}
