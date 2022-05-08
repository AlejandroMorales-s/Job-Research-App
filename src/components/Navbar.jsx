import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const profile = <FontAwesomeIcon className='profile' icon={ faUser } />

    return (
        <div className='nav-bg'>
            <div className='nav-container container'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <div className='profile-img'>
                    { profile }
                </div>
            </div>
        </div>
    )
}
