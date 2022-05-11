import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Empty() {

    const search = <FontAwesomeIcon className='search-icon' icon={ faMagnifyingGlass } />
    
    return (
    <div className='empty-container'>
        <h2 className='empty-title align-text'>No favorites yet!</h2>
        <p className='empty-info align-text'>You can add a favorite by clicking on the bookmark icon in the job card.</p>
        {search}
    </div>
  )
}
