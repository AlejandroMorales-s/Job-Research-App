import React, {useRef, useContext, useState} from 'react'
import { GlobalContext } from '../../../App'

const checkboxes = [
    {
        id: 1, 
        name: 'Languages', 
        filters: ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'Go', 'TypeScript']
    },
    {
        id: 2,
        name: 'Seniority',
        filters: ['Junior', 'Mid', 'Senior']
    },
    {
        id: 3,
        name: 'Experience',
        filters: ['1-2 years', '2-3 years', '3-5 years', '5-10 years', '10+ years']
    },
    {
        id: 4,
        name: 'Salary',
        filters: ['$0 - $1000', '$1000 - $2000', '$2000 - $3000', '$3000 - $4000', '$4000 - $5000', '$5000 - $6000', '$6000 - $7000', '$7000 - $8000', '$8000 - $9000', '$9000 - $10000', '$10000+']
    }
];
export default function Filters() {

    const {jobsFilter, setJobsFilter} = useContext(GlobalContext);
    const {jobs, setJobs} = useContext(GlobalContext);


    const filters = () => {
        setJobsFilter(jobs.filter(job => job.salary > 100000));
    }
    const clearFilters = () => {
        setJobsFilter(jobs);
    }
    console.log(jobsFilter); 

    return (
        <>
            <div className='filter-container container'>
                <button className='filter-btn' onClick={clearFilters}>clear</button>
                {checkboxes.map(checkbox => (
                    <div id={checkbox.id} key={checkbox.id}>
                        <button onClick={filters}  className='filter-btn'>{ checkbox.name }</button>
                        <div  className='filter-checkboxes '>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
/*
                        {checkbox.filters.map(filter => {
                            return (
                                <>
                                    <input name='languajes' value={filter} type='checkbox' id={filter} />
                                    <label htmlFor={filter}>{ filter }</label>
                                </>
                            )
                        })}




        <div className='filter-container container'>
            <button className='filter-btn'>Remove Filters</button>
            <button className='filter-btn'>Salary</button>
            <button className='filter-btn'>Seniority</button>

            <div onClick={filter}>
                <button ref={filterBtn} className='filter-btn'>Languajes</button>
                <div ref={menu} className='filter-checkboxes no-display'>
                    <FiltersBtns/>
                </div>
            </div>

            <button className='filter-btn'>Experience</button>
        </div>
        */