import { useState } from 'react'
import Home from './pages/Home.jsx'
import Favorite from './pages/Favorite'
import { Routes, Route }  from 'react-router-dom'
import NavBar from './components/NavBar'
import "./css/App.css"
import {MovieProvider} from './context/MovieContext'


function App() {

  return (
    <MovieProvider>
      <NavBar />
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/favorite" element={<Favorite />}/>
        </Routes>
    </main>
    </MovieProvider>
  
  )
}

export default App
