import React from 'react'
import DocumentTitle from 'react-document-title'
import Navbar from '../../Navbar'
import UserData from './UserData'

export default function Profile() {
  return (
    <>
        <DocumentTitle title='devJobs | Profile'/>
        <Navbar/>
        <h2 className='create-offer-title'>Profile</h2>
        <div className="form-container">
            <UserData/>
        </div>
    </>
  )
}
