import React, {useContext} from 'react'
import Navbar from '../Navbar'
import { GlobalContext } from '../../App'
import JobCard from '../feed/JobCard';
import Empty from '../favorites/Empty';

export default function AppliedJobs() {
    const {applied} = useContext(GlobalContext);
    return (
        <>
            <Navbar/>
            {applied.length === 0 ? (
                <Empty/>
                ) : (
                    <>
                        <h2 className='favorites-title align-text'>Applied Jobs</h2>
                        <div className="jobs-container favorites-container">
                            {applied.map(apply=>(
                            <JobCard key={apply.id} job={apply}/>
                            ))}
                        </div>
                    </>
                )}
        </>
    )
}
