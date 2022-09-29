import React, {useState, useContext} from 'react'
import { globalContext } from '../../../context/GlobalContext';
import Aside from './Aside'
import JobCard from './JobCard'

export default function Main() {
    const {jobsFilter, setJobsFilter} = useContext(globalContext);

    return (
        <>
            <div className='grid-main container'>
                <main>
                    <h2>{`${jobsFilter.length} jobs found`}</h2>
                    <div className="jobs-container">
                        {jobsFilter.map(job=>(
                        <JobCard key={job._id} job={job}/>
                        ))}
                    </div>
                </main>
                <Aside/>
            </div>
        </>
    )
}
