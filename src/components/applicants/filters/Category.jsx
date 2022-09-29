import React, {useContext} from 'react'
import Select from 'react-select';
import { postWithToken } from '../../../api';
import { globalContext } from '../../../context/GlobalContext';

const options = [
    { value: 'javascript', name: 'JavaScript' },
    { value: 'mongodb', name: 'Mongo DB' },
    { value: 'redux', name: 'Redux' },
    { value: 'node js', name: 'Node JS' },
    { value: 'django', name: 'DJango' },
    { value: 'react', name: 'React' },
    { value: 'postgresql', name: 'PostgreSQL' },
    { value: 'python', name: 'Python' },
    { value: 'angular', name: 'Angular' },
    { value: 'bootstrap', name: 'Bootstrap' },
    { value: 'mysql', name: 'MySQL' },
    { value: 'java', name: 'Java' },
    { value: 'graphql', name: 'Graphql' },
    { value: 'css', name: 'CSS' },
    { value: 'html', name: 'HTML' },
    { value: 'kotlin', name: 'Kotlin' },
    { value: 'vuejs', name: 'VueJS' },
    { value: 'rust', name: 'Rust' },
]

export default function Salary() {

    const {setJobsFilter} = useContext(globalContext);
    const {jobs} = useContext(globalContext);

    const handleSelectChange = ( event ) => {
        switch(event.value){
            case 'javascript':
                postWithToken('/api/jobs/category', {category: ['javascript']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'mongodb':
                postWithToken('/api/jobs/category', {category: ['mongodb']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'redux':
                postWithToken('/api/jobs/category', {category: ['redux']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'node js':
                postWithToken('/api/jobs/category', {category: ['node js']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'django':
                postWithToken('/api/jobs/category', {category: ['django']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'react':
                postWithToken('/api/jobs/category', {category: ['react']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'postgresql':
                postWithToken('/api/jobs/category', {category: ['postgresql']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'python':
                postWithToken('/api/jobs/category', {category: ['python']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'angular':
                postWithToken('/api/jobs/category', {category: ['angular']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'bootstrap':
                postWithToken('/api/jobs/category', {category: ['bootstrap']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'mysql':
                postWithToken('/api/jobs/category', {category: ['mysql']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'java':
                postWithToken('/api/jobs/category', {category: ['java']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'graphql':
                postWithToken('/api/jobs/category', {category: ['graphql']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'css':
                postWithToken('/api/jobs/category', {category: ['css']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'html':
                postWithToken('/api/jobs/category', {category: ['html']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'kotlin':
                postWithToken('/api/jobs/category', {category: ['kotlin']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'vuejs':
                postWithToken('/api/jobs/category', {category: ['vuejs']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            case 'rust':
                postWithToken('/api/jobs/category', {category: ['rust']})
                .then(res => {
                    setJobsFilter(res.data);
                })
                break;
            default:
                setJobsFilter(jobs);
            }
    }

    return (
        <div className = "Suppliers-container">
            <Select
                className="suppliers-select"
                placeholder = "Select Category"
                options = { options.map(option => ({ label: option.name, value: option.value })) }
                onChange = { handleSelectChange }
            />
        </div>
    )
}
