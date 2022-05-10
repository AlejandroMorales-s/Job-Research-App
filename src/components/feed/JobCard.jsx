import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import companyImgDefault from '../../assets/company.svg'

export default function JobCard() {

    const profile = <FontAwesomeIcon className='fav-icon' icon={ faBookmark } />

    return (
        <>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet=""
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>Front End Developer</h3>
                    <p className='job-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.</p>    
                </div>
                { profile }
            </div>
            <div className='job-card'>
            <div className="job-img-container">
                <img className='job-img' src={ companyImgDefault }
                srcSet=""
                alt="Img empresa"/>
            </div>
            <div className='job-info-container'>
                <h3 className='job-title'>Front End Developer</h3>
                <p className='job-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.</p>    
            </div>
            { profile }
            </div>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet=""
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>Front End Developer</h3>
                    <p className='job-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.</p>    
                </div>
                { profile }
            </div>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet=""
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>Front End Developer</h3>
                    <p className='job-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.</p>    
                </div>
                { profile }
            </div>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet=""
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>Front End Developer</h3>
                    <p className='job-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.</p>    
                </div>
                { profile }
            </div>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet=""
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>Front End Developer</h3>
                    <p className='job-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.</p>    
                </div>
                { profile }
            </div>
        </>
        
    )
}
