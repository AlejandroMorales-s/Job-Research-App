import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import companyImgDefault from '../../assets/company.svg'
import { GlobalContext } from '../../App'
import {Link} from 'react-router-dom';

export default function JobCard({job}) {
    
    const {favorites,setFavorites} = useContext(GlobalContext);
    
    const addToFavorites = () =>{
        if (favorites.find(fav => fav.id === job.id)){
            const newFavorites = favorites.filter(fav => fav.id !== job.id);
            setFavorites(newFavorites);
            alert('Removed from favorites')
        } else {
            setFavorites([...favorites,job]);
            alert('Job added to favorites')
        }
    }

    
    const fav = <FontAwesomeIcon onClick={addToFavorites} className='fav-icon' icon={ faBookmark } />

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
                    <div className="job-extrainfo-container">
                        <p className="extrainfo">{`Seniority: ${job.seniority}`}</p>
                        <p className="extrainfo">{`Salary: ${job.salary}`}</p>
                        <p className="extrainfo">{`Languaje: ${job.languages}`}</p>
                        <p className="extrainfo">{`Experience: ${job.experience}`}</p>
                    </div>
                </div>
                <div className='job-btns-container'>
                    { fav }
                    <Link to={`/job-details/${job.id}`}>
                        <button className='job-btn'>See offer</button>
                    </Link>
                </div>
            </div>
        </>
        
    )
}
