import React, {useState, createContext} from 'react'
import Aside from './Aside'
import JobCard from './JobCard'

const jobs = [
    {
        id: 1,
        title: 'Front End Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Google',
        companyImg: 'https://e7.pngegg.com/pngimages/543/934/png-clipart-google-app-logo-google-logo-g-suite-google-text-logo.png',
        salary: '$100,000',
        seniority: 'Junior',
        languages: 'JavaScript, React, Redux, NodeJS',
        experience: '1 year',
    },
    {
        id: 2,
        title: 'Back End Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Amazon',
        companyImg: 'https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg',
        salary: '$100,000',
        seniority: 'Trainee',
        languages: 'JavaScript, React, Redux, NodeJS',
        experience: '1 year'
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Meta',
        companyImg: 'https://logos-marcas.com/wp-content/uploads/2021/10/Meta-facebook-Nuevo-Logotipo.jpg',
        salary: '$100,000',
        seniority: 'Mid',
        languages: 'JavaScript, React, Redux, NodeJS',
        experience: '1 year'
    },
    {
        id: 4,
        title: 'Software Engineer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
        company: 'Twitter',
        companyImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1280px-Twitter-logo.svg.png',
        salary: '$100,000',
        seniority: 'Senior',
        languages: 'JavaScript, React, Redux, NodeJS',
        experience: '1 year'
    }
]

export const FavoritesContext = createContext()


export default function Main() {

    const [favorites, setFavorites] = useState([])
    
    return (
        <FavoritesContext.Provider value={{
            favorites,
            setFavorites
            
        }}>
            <div className='grid-main container'>
                <main>
                    <h2>{`${jobs.length} jobs found`}</h2>
                    <div className="jobs-container">
                        {jobs.map(job=>(
                        <JobCard key={job.id} job={job}/>
                        ))}
                    </div>
                </main>
                <Aside/>
            </div>
        </FavoritesContext.Provider>
    )
}
