import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import companyImgDefault from '../../../assets/company.svg'
import { GlobalContext } from '../../../App'
import {Link} from 'react-router-dom';

export default function JobCard({job}) {
    
    const {favorites,setFavorites} = useContext(GlobalContext);
    const {auth} = useContext(GlobalContext);
    
    const addToFavorites = () =>{
        if (favorites.find(fav => fav._id === job._id)){
            const newFavorites = favorites.filter(fav => fav._id !== job._id);
            setFavorites(newFavorites);
            alert('Removed from favorites')
        } else {
            setFavorites([...favorites,job]);
            alert('Job added to favorites')
        }
    }

    
    const fav = <FontAwesomeIcon onClick={addToFavorites} className={`fav-icon ${favorites.find(fav => fav._id === job._id) ? 'fav-active' : ''}`} icon={ faBookmark } />

    return (
        <>
            <div className='job-card'>
                <div className="job-img-container">
                    <img className='job-img' src={ companyImgDefault }
                    srcSet={ job.companyImg }
                    alt="Img empresa"/>
                </div>
                <div className='job-info-container'>
                    <h3 className='job-title'>{`${ job.title }`}</h3>
                    <p className='job-desc'>{ job.description }</p>    
                    <div className="job-extrainfo-container">
                        <p className="extrainfo">{`Location: ${job.location.province}, ${job.location.country}`}</p>
                        <p className="extrainfo">{`Salary: ${job.salary}`}</p>
                        <p className="extrainfo">{`Languaje: ${job.category}`}</p>
                        <p className="extrainfo">{`Applicants: ${job.applicants.length}`}</p>
                    </div>
                </div>
                <div className='job-btns-container'>
                    {auth.role === 'applicant' ? 
                        [ fav ]
                    :
                    <></>
                    }
                    <Link to={`/job-details/${job._id}`}>
                        <button className='job-btn'>See offer</button>
                    </Link>
                </div>
            </div>
        </>
        
    )
}
