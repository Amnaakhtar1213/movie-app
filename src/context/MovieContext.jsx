import {createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
  const [favorite, setFavorite] = useState([])
  useEffect(() => {
    const storedFav = localStorage.getItem("favorite")
    if(storedFav) setFavorite(JSON.parse(storedFav))
  }, [])

useEffect(() => {
  localStorage.setItem('favorite', JSON.stringify(favorite))
}, [favorite])

const addToFavorite = (movie) => {
  setFavorite(prev => [...prev, movie])
}

const removeFavorite = (movieId) => {
  setFavorite(prev => prev.filter(movie => movie.id !== movieId))
}

const isFavorite = (movieId) => {
  return favorite.some(movie => movie.id === movieId)
}

const value = {
  favorite, addToFavorite, removeFavorite, isFavorite
}

return <MovieContext.Provider value={value}>
  {children}
</MovieContext.Provider>
}