import React from 'react';
import Navbar from '../Navbar';
import Filters from './Filters';
import DocumentTitle from 'react-document-title';

export default function Feed() {
    return (
        <>
            <DocumentTitle title="devJobs | Feed"/>
            <Navbar/>
            <Filters/>
        </>
    )
}
