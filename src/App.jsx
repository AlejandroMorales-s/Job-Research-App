import './App.scss';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Feed from './components/applicants/feed/Feed';
import Favorites from './components/applicants/favorites/Favorites';
import JobDet from './components/applicants/jobDetails/JobDetails';
import AppliedJobs from './components/applicants/appliedJobs/AppliedJobs';
import NotFound from './components/NotFound';
import SignUp from './components/Login/SignUp';
import Profile from './components/applicants/profile/Profile';
import CreateOffer from './components/employers/createOffer/CreateOffer';
import MyOffers from './components/employers/offers/MyOffers';
import SeeAplicants from './components/employers/seeApplicants/SeeAplicants';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          {/*//* Applicants view */}
          <Route path="/feed" element={<Feed/>} />
          <Route path="/job-details/:id" element={<JobDet/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/applied" element={<AppliedJobs/>} />
          <Route path="/profile" element={<Profile/>} />
          {/*//*Employers view */}
          <Route path="/createoffer" element={<CreateOffer/>} />
          <Route path="/myoffers" element={<MyOffers/>} />
          <Route path="/applicants/:id" element={<SeeAplicants/>} />
          {/*//* Not Found view */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
  );
}

export default App;
