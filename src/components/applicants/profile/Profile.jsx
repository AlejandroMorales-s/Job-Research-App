import React from 'react'
import DocumentTitle from 'react-document-title'
import Navbar from '../../Navbar'
import UserData from './UserData'

export default function Profile() {
  return (
    <>
        <DocumentTitle title='devJobs | Profile'/>
        <Navbar/>
        <div className="form-container">
            <UserData/>
        </div>
    </>
  )
}
