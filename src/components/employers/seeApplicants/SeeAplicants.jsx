import React, {useEffect, useState} from 'react'
import Empty from '../../applicants/favorites/Empty'
import Navbar from '../../Navbar'
import { useParams } from 'react-router-dom'
import { getOneWithToken } from '../../../api';
import ApplicantsCard from './ApplicantsCard';
import DocumentTitle from 'react-document-title';

export default function SeeAplicants() {

    const {id} = useParams();
    const [applicants, setApplicants] = useState([]);

    //* Fetch job details
    const fetching = async () => {
        try {
            let res = await getOneWithToken(`/api/jobs/${id}`)
            let json = await res.data;
            setApplicants(json.applicants);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetching()
    }, [id])
    
  return (
    <>
        <DocumentTitle title="devJobs | Applicants"/>
        <Navbar/>
        {applicants.length === 0 ?  
            <Empty info={['No applicants for this offer!', 'Come back later']}/>
        :
            <>
                <h2 className='favorites-title align-text'>Applicants</h2>
                <div className='applicants-container container'>
                    {applicants.map(applicant => (
                        <ApplicantsCard key={applicant.id} applicant={applicant}/>
                    ))}
                </div>
            </>
        }
    </>
  )
}
