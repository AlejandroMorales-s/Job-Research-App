import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Feed from './components/feed/Feed';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </Router>
  );
}

export default App;
