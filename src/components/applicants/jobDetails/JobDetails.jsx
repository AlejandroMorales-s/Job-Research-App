import React, {useEffect, useState, useContext} from 'react'
import DocumentTitle from 'react-document-title';
import { useParams } from 'react-router-dom'
import { applyToJob, getOneWithToken, putWithToken } from '../../../api'
import Navbar from '../../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import companyImgDefault from '../../../assets/company.svg'
import { GlobalContext } from '../../../App';


export default function JobDet() {

    const {favorites, setFavorites} = useContext(GlobalContext);
    const {applied, setApplied} = useContext(GlobalContext);

    const params = useParams()
    const id = params.id
    const [job, setJob] = useState({})

    useEffect(()=>{
        getOneWithToken(`/api/jobs/${id}`)
        .then(({data})=>{
            setJob(data)
        })
    },[])
    //console.log(job); 
    
    //* Add or remove job from favorites
    const addToFavorites = () =>{
        if (favorites.find(fav => fav._id === job._id)){
            const newFavorites = favorites.filter(fav => fav._id !== job._id);
            setFavorites(newFavorites);
            alert('Removed from favorites')
        } else {
            alert('Job added to favorites')
            setFavorites([...favorites,job]);
        }
    }
    
        
    //* Add or remove job from applied
    const apply = () =>{

        
        if (applied.find(apply => apply._id === job._id)){
            alert('You already applied to this job')
        } else {
            putWithToken(`/api/jobs/apply/${job._id}`)

            alert('You applied to this job!')
            setApplied([...applied,job]);
        }
    }

    const fav = <FontAwesomeIcon onClick={ addToFavorites } className='fav-icon' icon={ faBookmark } />

    return (
        <>
        <DocumentTitle title={`devJobs | ${job.title}`}/>
        <Navbar/>
        <div className='details-container container'>
                <div className="details-info">
                    <div className="info-img-container">
                        <img src={ companyImgDefault }
                        srcSet={ job.companyImg }
                        alt="Logo Company"/>
                    </div>
                    <div className="info-titles">
                        <h3 className='info-title'>{ job.company }</h3>
                        <h3 className='info-title'>{ job.title }</h3>
                    </div>
                    <div className='extrainfo-grid'>
                        <div className='extrainfo-container languajes-container'>
                            <p className='extrainfo-title'>Languajes:</p>
                            <p>{ job.category }</p>
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
                            <p className='extrainfo-title'>Location:</p>
                        </div>
                    </div>
                    <div className='details-btns-container'>
                        { fav }
                        <button onClick={apply}  className='apply-btn'>Apply</button>
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
