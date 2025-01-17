'use client'
import React from 'react';
import { useFetchMovie } from './moviefetcher';
const MoviePage = () => {
    const { movie, loading, error} = useFetchMovie("https://api.themoviedb.org/3/movie/939243");
    return (
        <div>
        <h1>{movie?.title}</h1>      
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <p>{movie?.overview}</p>
            </div>
        </div>
    )
}
export default MoviePage;