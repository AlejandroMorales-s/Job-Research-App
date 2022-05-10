import React from 'react'
import Aside from './Aside'
import JobCard from './JobCard'

export default function Main() {
    return (
        <div className='grid-main container'>
            <main>
                <h2>6 jobs found</h2>
                <div className="jobs-container">
                    <JobCard/>
                </div>
            </main>
            <Aside/>
        </div>
    )
}
