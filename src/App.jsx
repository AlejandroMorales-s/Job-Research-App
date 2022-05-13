import './App.scss';
import React, {useState, createContext} from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Feed from './components/feed/Feed';
import Favorites from './components/favorites/Favorites';
import JobDetails from './components/jobDetails/JobDetails';
import AppliedJobs from './components/appliedJobs/AppliedJobs';

const allJobs = [
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
      description: `About the client:
      Sweet Onion is a lean, sprint-based shop. We only bring on high-value, highly-skilled staff and contractors so we can avoid the idioms of middle-management, and micro-management, and stay focused on tomorrow. What does that mean to you? We spend time conceptualizing an idea, product, and service and then make quick targeted decisions to maximize Product Market Fit and increase your ROI.
      About the job:
      To ensure success as a Front-End Developer, you should have in-depth knowledge of PHP programming language, Angular programming, a good eye for aesthetics, and strong content management skills. A top-class Developer can create attractive, user-friendly websites that perfectly meet the design and functionality specifications of the client. Responsibilities: Meeting with stakeholders to discuss website design and function.
      Designing and building the website front-end.
      Communication with back-end teams to provide an understanding of API requirements and data delivery
      Troubleshooting content issues, including CSS positioning, responsiveness, and advanced issues like forms and JavaScript integrations.
      Writing automated testing tasks to ensure bug-free delivery of software.
      Documentation of code and updates to related project technical specifications.
      Requirements:
      Experience working with debugging tools such as Chrome Inspector, Firebug and Xdebug
      Good understanding of website architecture and aesthetics.
      Good communication skills are a must.
      Work experience of 3 plus years:
      
      as a PHP CodeIgniter Developer.
      HTML/CSS3, specific focus on flex and bootstrap alignment strategies
      CSS Animation/Motion techniques
      Vanilla JavaScript, jQuery, and reusable JS functions
      You should have experience with:
      
      Git/GitLab methodology (Merge Requests, re-basing, and version strategies)
      Docker & Docker Compose (1 year)
      VS Code &/or Sublime Editor (2 years)
      About the client:
      Sweet Onion is a lean, sprint-based shop. We only bring on high-value, highly-skilled staff and contractors so we can avoid the idioms of middle-management, and micro-management, and stay focused on tomorrow. What does that mean to you? We spend time conceptualizing an idea, product, and service and then make quick targeted decisions to maximize Product Market Fit and increase your ROI.
      About the job:
      To ensure success as a Front-End Developer, you should have in-depth knowledge of PHP programming language, Angular programming, a good eye for aesthetics, and strong content management skills. A top-class Developer can create attractive, user-friendly websites that perfectly meet the design and functionality specifications of the client. Responsibilities: Meeting with stakeholders to discuss website design and function.
      Designing and building the website front-end.
      Communication with back-end teams to provide an understanding of API requirements and data delivery
      Troubleshooting content issues, including CSS positioning, responsiveness, and advanced issues like forms and JavaScript integrations.
      Writing automated testing tasks to ensure bug-free delivery of software.
      Documentation of code and updates to related project technical specifications.
      Requirements:
      Experience working with debugging tools such as Chrome Inspector, Firebug and Xdebug
      Good understanding of website architecture and aesthetics.
      Good communication skills are a must.
      Work experience of 3 plus years:
      
      as a PHP CodeIgniter Developer.
      HTML/CSS3, specific focus on flex and bootstrap alignment strategies
      CSS Animation/Motion techniques
      Vanilla JavaScript, jQuery, and reusable JS functions
      You should have experience with:
      
      Git/GitLab methodology (Merge Requests, re-basing, and version strategies)
      Docker & Docker Compose (1 year)
      VS Code &/or Sublime Editor (2 years)
      About the client:
      Sweet Onion is a lean, sprint-based shop. We only bring on high-value, highly-skilled staff and contractors so we can avoid the idioms of middle-management, and micro-management, and stay focused on tomorrow. What does that mean to you? We spend time conceptualizing an idea, product, and service and then make quick targeted decisions to maximize Product Market Fit and increase your ROI.
      About the job:
      To ensure success as a Front-End Developer, you should have in-depth knowledge of PHP programming language, Angular programming, a good eye for aesthetics, and strong content management skills. A top-class Developer can create attractive, user-friendly websites that perfectly meet the design and functionality specifications of the client. Responsibilities: Meeting with stakeholders to discuss website design and function.
      Designing and building the website front-end.
      Communication with back-end teams to provide an understanding of API requirements and data delivery
      Troubleshooting content issues, including CSS positioning, responsiveness, and advanced issues like forms and JavaScript integrations.
      Writing automated testing tasks to ensure bug-free delivery of software.
      Documentation of code and updates to related project technical specifications.
      Requirements:
      Experience working with debugging tools such as Chrome Inspector, Firebug and Xdebug
      Good understanding of website architecture and aesthetics.
      Good communication skills are a must.
      Work experience of 3 plus years:
      
      as a PHP CodeIgniter Developer.
      HTML/CSS3, specific focus on flex and bootstrap alignment strategies
      CSS Animation/Motion techniques
      Vanilla JavaScript, jQuery, and reusable JS functions
      You should have experience with:
      
      Git/GitLab methodology (Merge Requests, re-basing, and version strategies)
      Docker & Docker Compose (1 year)
      VS Code &/or Sublime Editor (2 years)`,
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
  },
  {
      id: 5,
      title: 'Software Engineer',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quas, quidem minima corporis aliquam quae fugiat culpa architecto rerum quos ullam qui numquam, nobis cupiditate omnis tenetur. Voluptatum, sequi quod.',
      company: 'Netflix',
      companyImg: 'https://brandemia.org/sites/default/files/sites/default/files/icono_netflix_nuevo.jpg',
      salary: '$100,000',
      seniority: 'Senior',
      languages: 'JavaScript, React, Redux, NodeJS',
      experience: '1 year'
  }
]

export const GlobalContext = createContext()

function App() {
  const [favorites, setFavorites] = useState([])
  const [jobs] = useState(allJobs)
  const [applied, setApplied] = useState([])
  return (
    <GlobalContext.Provider value={{
      favorites,
      setFavorites,
      jobs,
      applied,
      setApplied
  }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/job-details/:id" element={<JobDetails/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/applied" element={<AppliedJobs/>} />
          <Route path='*' element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
