import './App.scss';
import React, {useState, createContext, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Feed from './components/applicants/feed/Feed';
import Favorites from './components/applicants/favorites/Favorites';
import JobDet from './components/applicants/jobDetails/JobDetails';
import AppliedJobs from './components/applicants/appliedJobs/AppliedJobs';
import NotFound from './components/NotFound';
import EmployersFeed from './components/employers/employersFeed/EmployersFeed';
import SignUp from './components/Login/SignUp';
import { getAllWithToken } from './api';

export const GlobalContext = createContext()

function App() {

  const recoverSession = ()=>{
    const token = localStorage.getItem("token")

    if(token){
        fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+ token
        },
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.failed){
            console.log(data)
        }else{
            setAuth({
                id:data.user.id,
                name:data.user.name,
                logged:true
            })
        }
    })
    .catch(error=>console.log(error))
    }
}


const [jobsFilter, setJobsFilter] = useState([])
const [jobs, setJobs] = useState([])

useEffect(()=>{
  getAllWithToken("/api/jobs")
  .then(({data})=>{
    setJobs(data)
    setJobsFilter(data)
    //console.log(data); 
  })
  recoverSession()
  },[])
  
  
  const [favorites, setFavorites] = useState([])
  const [applied, setApplied] = useState([])
  const [auth,setAuth] = useState({
    id:"",
    name:"",
    logged:false
})

console.log(auth); 
  return (
    <GlobalContext.Provider value={{
      favorites,
      setFavorites,
      jobs,
      setJobs,
      applied,
      setApplied,
      jobsFilter,
      setJobsFilter,
      auth,
      setAuth,
  }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          {/*//* Applicants view */}
          <Route path="/feed" element={<Feed/>} />
          <Route path="/job-details/:id" element={<JobDet/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/applied" element={<AppliedJobs/>} />
          {/*//*Employers view */}
          <Route path="/employerfeed" element={<EmployersFeed/>} />
          {/*//* Not Found view */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
