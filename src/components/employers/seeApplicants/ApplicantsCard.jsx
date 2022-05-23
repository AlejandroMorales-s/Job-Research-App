import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ApplicantsCard({applicant}) {

    const profile = <FontAwesomeIcon className='profile' icon={ faUser } />
    
    return (
        <div className='applicant-card'>
            <h3>{applicant.name}</h3>
            <div className='profile-img'>
                { profile }
            </div>
            <div>
                <p className='bold'>Email</p>
                <p>{applicant.email}</p>
            </div>
            <div>
                <p className='bold'>Phone</p>
                <p>12345678</p>
            </div>
            <button className='see-aplicant-btn'>See profile</button>
        </div>
    )
}
