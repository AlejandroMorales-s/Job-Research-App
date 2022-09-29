import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {NavLink, Link} from 'react-router-dom';
import { globalContext } from '../context/GlobalContext';

export default function Navbar() {
    const {user} = useContext(globalContext)

    const profile = <FontAwesomeIcon className='profile' icon={ faUser } />

    return (
        <div className='nav-bg'>
            <div className='nav-container container'>
                <NavLink to={user.role === "applicant" ? "/feed" : "/myoffers"}>
                    <h1 className='logo'>devJobs<span className='logo-span'>()</span></h1>
                </NavLink>
                <nav className="nav">
                    <ul className="nav-list">
                        {user.role === "applicant" ? 
                        <>
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
                        </>
                        :
                        <>
                            <li className="nav-link">
                                <NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'} to="/myoffers">
                                    My offers
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'} to="/createoffer">
                                    Create offer
                                </NavLink>
                            </li>
                        </>} 
                    </ul>
                </nav>
                <div className='profile-container'>
                    {user.logged&&<p>Welcome <span className='bold'>{user.name}</span>!</p>}
                    <Link to='/profile'>
                        <div className='profile-img'>
                            { profile }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
