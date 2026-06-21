import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"
import {searchMovie, getPopularMovies} from "../services/api"

function Home() {

const [search, setSearch] = useState("");
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
 
useEffect(() => {
 const loadPopularMovies = async () => {
  try {
    const popularMovie = await getPopularMovies()
    setMovies(popularMovie)
  } catch (err) {
    setError("Failed to load movies...")
  }
  finally {
    setLoading(false)
  }
 }
 loadPopularMovies()
}, [])


const handleSearch = async (e) => {
    e.preventDefault();
     if(!search.trim()) return
     if(loading) return  

     setLoading(true)
     try {
        const searchResult = await searchMovie(search)
        setMovies(searchResult)
        setError(null)
     } catch (err){
      setError("Fail to Load")
     } finally {
      setLoading(false)
     }
     setSearch("")
  }

  return (
     <div className="home">
    <form onSubmit={handleSearch} className="search-form" >
      <input type="text" value={search}
      onChange={(e) => setSearch(e.target.value)} placeholder="Search for movie..." className="search-input" />
      <button type="submit" className="search-button">Submit</button>
    </form>

{error && <div className="error-message">{error}</div>}

     {loading ? <div className="loading">Loading...</div> : (
       <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
          ))}
    </div>
     )}
   
  </div>
  )
 
}

export default Home
