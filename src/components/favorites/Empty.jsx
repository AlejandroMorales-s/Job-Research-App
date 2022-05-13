import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Empty({info}) {

    const search = <FontAwesomeIcon className='search-icon' icon={ faMagnifyingGlass } />
    
    return (
    <div className='empty-container'>
        <h2 className='empty-title align-text'>{ info[0] }</h2>
        <p className='empty-info align-text'>{ info[1] }</p>
        {search}
    </div>
  )
}
