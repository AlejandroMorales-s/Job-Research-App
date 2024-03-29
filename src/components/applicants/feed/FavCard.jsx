import React, {useContext} from 'react'
import companyImgDefault from '../../../assets/company.svg'
import {Link} from 'react-router-dom';
import { globalContext } from '../../../context/GlobalContext';

export default function FavsCard() {

    const {favorites} = useContext(globalContext);

    return (
        <>
            {favorites.map(job => {
                return (
                    <div className='fav-card' key={job._id}>
                        <Link to={`/job-details/${job._id}`}>
                            <div className="header-fav">
                                <div className="fav-img-container">
                                    <img src={ companyImgDefault } alt="" 
                                    srcSet={job.companyImg} />
                                </div>
                            <h3 className='fav-title'>{`${ job.title }`}</h3>
                            </div>
                            <p className='fav-desc'>{ job.description }</p>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}
