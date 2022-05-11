import React, {useContext} from 'react'
import { FavoritesContext } from '../../App'
import Navbar from '../Navbar'
import DocumentTitle from 'react-document-title';
import JobCard from '../feed/JobCard';
import Empty from './Empty';

export default function Favorites() {
    
    const {favorites,setFavorites} = useContext(FavoritesContext);

    return (
        <>
            <DocumentTitle title="devJobs | Favorites"/>
            <Navbar/>
            {favorites.length === 0 ? (
                <Empty/>
                ) : (
                    <>
                        <h2 className='favorites-title align-text'>Favorites</h2>
                        <div className="jobs-container favorites-container">
                            {favorites.map(job=>(
                            <JobCard key={job.id} job={job}/>
                            ))}
                        </div>
                    </>
                )}
        </>
    )
}
