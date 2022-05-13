import React, {useContext} from 'react'
import { GlobalContext } from '../../App'
import Navbar from '../Navbar'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import DocumentTitle from 'react-document-title';

export default function JobDetails() {
    const {jobs} = useContext(GlobalContext);
    const {id} = useParams()
    const job = jobs.find(job => job.id == parseInt(id))

    const {favorites,setFavorites} = useContext(GlobalContext);
    
    const addToFavorites = () =>{
        if (favorites.find(fav => fav.id === job.id)){
            const newFavorites = favorites.filter(fav => fav.id !== job.id);
            setFavorites(newFavorites);
        } else {
            setFavorites([...favorites,job]);
        }
    }

    const fav = <FontAwesomeIcon onClick={addToFavorites} className='fav-icon' icon={ faBookmark } />
    return (
        <>
            <DocumentTitle title={`devJobs | ${job.company} - ${job.title}`}/>
            <Navbar/>
            <div className='details-container container'>
                <div className="details-info">
                    <div className="info-img-container">
                        <img src={ job.companyImg } alt="Logo Company"/>
                    </div>
                    <div className="info-titles">
                        <h3 className='info-title'>{ job.company }</h3>
                        <h3 className='info-title'>{ job.title }</h3>
                    </div>
                    <div className='extrainfo-grid'>
                        <div className='extrainfo-container languajes-container'>
                            <p className='extrainfo-title'>Languajes:</p>
                            <p>{ job.languages }</p>
                        </div>
                        <div className='extrainfo-container salary-container'>
                            <p className='extrainfo-title'>Salary:</p>
                            <p>{ job.salary }</p>
                        </div>
                        <div className='extrainfo-container experience-container'>
                            <p className='extrainfo-title'>Experience:</p>
                            <p>{ job.experience }</p>
                        </div>
                        <div className='extrainfo-container seniority-container'>
                            <p className='extrainfo-title'>Seniority:</p>
                            <p>{ job.seniority }</p>
                        </div>
                    </div>
                    <div className='details-btns-container'>
                        { fav }
                        <button className='apply-btn'>Apply</button>
                    </div>
                </div>
                <div className="details-desc">
                    <div className="desc-title-container">
                        <h3 className='desc-title'>Job Details</h3>    
                    </div>
                    <div className="desc-text-container">
                        <p className='desc-text'>{ job.description }</p>
                    </div>
                </div>
                <div className="details-btn-container">

                </div>
            </div>
        </>
    )
}
