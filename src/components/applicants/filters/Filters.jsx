import React, {useContext} from 'react'
import Salary from './Salary'
import Category from './Category'
import { globalContext } from '../../../context/GlobalContext';

export default function Filters() {

    const {setJobsFilter} = useContext(globalContext);
    const {jobs} = useContext(globalContext);

    const clearFilters = () => {
        setJobsFilter(jobs);
    }

    return (
        <>
            <div className='filter-container container'>
                <button className='filter-btn' onClick={clearFilters}>clear</button>
                <Salary/>
                <Category/>
            </div>
        </>
    )
}
