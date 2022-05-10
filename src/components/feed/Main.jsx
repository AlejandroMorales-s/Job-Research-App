import React from 'react'
import Aside from './Aside'
import JobCard from './JobCard'

const jobs = [
    {
        id: 1,
        title: 'Front End Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Google',
        companyImg: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    },
    {
        id: 2,
        title: 'Back End Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Amazon',
        companyImg: 'https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg',
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Meta',
        companyImg: 'https://logos-marcas.com/wp-content/uploads/2021/10/Meta-facebook-Nuevo-Logotipo.jpg',
    },
    {
        id: 4,
        title: 'Software Engineer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Twitter',
        companyImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1280px-Twitter-logo.svg.png',
    }
]

export default function Main() {
    return (
        <div className='grid-main container'>
            <main>
                <h2>6 jobs found</h2>
                <div className="jobs-container">
                    {jobs.map(job=>(
                    <JobCard key={job.id} job={job}/>
                    ))}
                </div>
            </main>
            <Aside/>
        </div>
    )
}
