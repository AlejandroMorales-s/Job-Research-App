import './App.scss';
import React, {useState, createContext} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Feed from './components/feed/Feed';
import Favorites from './components/favorites/Favorites';

export const FavoritesContext = createContext()

function App() {
  const [favorites, setFavorites] = useState([])
  return (
    <FavoritesContext.Provider value={{
      favorites,
      setFavorites
      
  }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </Router>
    </FavoritesContext.Provider>
  );
}

export default App;
