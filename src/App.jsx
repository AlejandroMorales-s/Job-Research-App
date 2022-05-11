import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Feed from './components/feed/Feed';
import Favorites from './components/favorites/Favorites';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </Router>
  );
}

export default App;
