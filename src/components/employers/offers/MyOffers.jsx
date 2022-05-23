import React, {useEffect, useState} from 'react'
import { postWithToken } from '../../../api';
import Empty from '../../applicants/favorites/Empty';
import JobCard from '../../applicants/feed/JobCard';
import Navbar from '../../Navbar';
import DocumentTitle from 'react-document-title'

export default function MyOffers() {

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postWithToken('/api/jobs/employer')
    .then(({data}) => {
      setOffers(data);
      setLoading(false);
    })
    .catch(error => console.log(error))
  },[])

  return (
    <>
      <DocumentTitle title='devJobs | My Offers'/>
      <Navbar/>
      {loading ? 
        <Empty info={['No offers yet', 'Create your first offer and start receiving applications!']}/>
      :
      <>
        <h2 className='create-offer-title'>My offers</h2>
        <div className="jobs-container container">
          {offers.map(offer=>(
            <JobCard key={offer._id} job={offer}/>
          ))}
        </div>
      </>}
    </>
  )
}
