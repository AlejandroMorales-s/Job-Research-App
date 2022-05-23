import React, {useContext} from 'react'
import { GlobalContext } from '../../../App'
import Salary from './Salary'
import Category from './Category'

export default function Filters() {

    const {setJobsFilter} = useContext(GlobalContext);
    const {jobs} = useContext(GlobalContext);

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
