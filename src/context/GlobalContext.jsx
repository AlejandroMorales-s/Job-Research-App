import { useState, createContext } from 'react'

export const globalContext = createContext()

export default function GlobalContext() {
    const [jobsFilter, setJobsFilter] = useState([])
    const [jobs, setJobs] = useState([])
    const [favorites, setFavorites] = useState([])
    const [applied, setApplied] = useState([])
    const [user,setUser] = useState({
        id:"",
        name:"",
        email:"",
        role:"",
        logged:false
    })



    if (applied.error === true){
        setApplied([])
    }
    return (
        <globalContext.Provider value={{
            favorites,
            setFavorites,
            jobs,
            setJobs,
            applied,
            setApplied,
            jobsFilter,
            setJobsFilter,
            user,
            setUser,
        }}>

        </globalContext.Provider>
    )
}
