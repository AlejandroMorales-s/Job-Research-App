import React from 'react';
import Navbar from '../Navbar';
import Filters from '../filters/Filters';
import DocumentTitle from 'react-document-title';
import Main from './Main';

export default function Feed() {
    return (
        <>
            <DocumentTitle title="devJobs | Feed"/>
            <Navbar/>
            <Filters/>
            <Main/>
        </>
    )
}
