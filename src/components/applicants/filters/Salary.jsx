import React, {useContext} from 'react'
import { GlobalContext } from '../../../App'
import Select from 'react-select';

const options = [
    { id: 1, name: '< $20,000' },
    { id: 2, name: '$20,000 - $50,000' },
    { id: 3, name: '$50,000 - $100,000' },
    { id: 4, name: '$100,000 - $150,000' },
    { id: 5, name: '> $150,000' },
]

export default function Salary() {

    const {setJobsFilter} = useContext(GlobalContext);
    const {jobs} = useContext(GlobalContext);

    const handleSelectChange = ( event ) => {
        switch(event.value){
            case 1:
                setJobsFilter(jobs.filter(job => job.salary < 20000));
                break;
            case 2:
                setJobsFilter(jobs.filter(job => job.salary > 20000 && job.salary < 50000));
                break;
            case 3:
                setJobsFilter(jobs.filter(job => job.salary > 50000 && job.salary < 100000));
                break;
            case 4:
                setJobsFilter(jobs.filter(job => job.salary > 100000 && job.salary < 150000));
                break;
            case 5:
                setJobsFilter(jobs.filter(job => job.salary > 150000));
                break;
            default:
                setJobsFilter(jobs);
        }
    }

    return (
        <div className = "Suppliers-container">
            <Select
                className="suppliers-select"
                placeholder = "Select Salary"
                options = { options.map(option => ({ label: option.name, value: option.id })) }
                onChange = { handleSelectChange }
            />
        </div>
    )
}
