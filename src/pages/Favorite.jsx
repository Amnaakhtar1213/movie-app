import React from 'react';
import "../css/Favorite.css";
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorite = () => {
  const { favorite } = useMovieContext();

  if (favorite && favorite.length > 0) {
    return (
      <div className="favorite">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorite.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorite-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
};

export default Favorite