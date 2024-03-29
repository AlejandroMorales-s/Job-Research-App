import React, {useContext} from 'react'
import Navbar from '../../Navbar'
import DocumentTitle from 'react-document-title';
import JobCard from '../feed/JobCard';
import Empty from './Empty';
import { globalContext } from '../../../context/GlobalContext';

export default function Favorites() {
    
    const {favorites} = useContext(globalContext);

    return (
        <>
            <DocumentTitle title="devJobs | Favorites"/>
            <Navbar/>
            {favorites.length === 0 ? (
                <Empty info={['No favorite jobs yet!', 'You can add a favorite by clicking on the bookmark icon in the job card.']}/>
                ) : (
                    <>
                        <h2 className='favorites-title align-text'>Favorites</h2>
                        <div className="jobs-container favorites-container">
                            {favorites.map(job=>(
                            <JobCard key={job._id} job={job}/>
                            ))}
                        </div>
                    </>
                )}
        </>
    )
}
