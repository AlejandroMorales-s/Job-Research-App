import React, {useContext, useEffect} from 'react'
import Navbar from '../../Navbar'
import JobCard from '../feed/JobCard';
import Empty from '../favorites/Empty';
import { postWithToken } from '../../../api';
import { globalContext } from '../../../context/GlobalContext';

export default function AppliedJobs() {
    const {applied, setApplied} = useContext(globalContext);

    useEffect(()=>{
    postWithToken('/api/jobs/me')
    .then(({data})=>{
        setApplied(data)
    })
    },[])

    return (
        <>
            <Navbar/>
            {applied.length === 0 ? (
                <Empty info={[`No applyed jobs find`, 'All jobs you apply for will be shown here.']}/>
                ) : (
                    <>
                        <h2 className='favorites-title align-text'>Applied Jobs</h2>
                        <div className="jobs-container favorites-container">
                            {applied.map(apply=>(
                            <JobCard key={apply._id} job={apply}/>
                            ))}
                        </div>
                    </>
                )}
        </>
    )
}
