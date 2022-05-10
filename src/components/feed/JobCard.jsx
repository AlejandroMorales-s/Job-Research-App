import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import companyImgDefault from '../../assets/company.svg'

export default function JobCard({job}) {

    const profile = <FontAwesomeIcon className='fav-icon' icon={ faBookmark } />

    return (
        <>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet={ job.companyImg }
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>{`${job.company}   |   ${ job.title }`}</h3>
                    <p className='job-desc'>{ job.description }</p>    
                </div>
                { profile }
            </div>

        </>
        
    )
}
