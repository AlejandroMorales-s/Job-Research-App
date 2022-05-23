import React from 'react'
import Empty from '../../applicants/favorites/Empty';
import Navbar from '../../Navbar';

export default function MyOffers() {
  return (
    <>
        <Navbar/>
        <Empty info={['No offers yet', 'Create your first offer and start receiving applications!']}/>
    </>
  )
}
