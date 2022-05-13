import React from 'react'
import Empty from './applicants/favorites/Empty'
import Navbar from './Navbar'

export default function NotFound() {
  return (
    <>
        <Navbar/>
        <Empty info={['404 NOT FOUND', 'Page not found, please go back to the principal page.']}/>
    </>
  )
}
