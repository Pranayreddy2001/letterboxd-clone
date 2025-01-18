'use client'
import React from 'react';
import { useFetchMovie } from './moviefetcher';
import Reviewsection from './reviewsection';
const MoviePage = () => {
    const { movie, loading, error} = useFetchMovie("https://api.themoviedb.org/3/movie/939243");
    return (
        <div className="bg-gray-900 text-white font-sans">
        {/* <h1>{movie?.title}</h1>      
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} />
                <p>{movie?.overview}</p>
            </div> */}
            <section className="relative">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.background_path}`}
        alt="Hero Background"
        className="w-full h-full object-cover opacity-70"
      />
    </div>
    <div className="relative px-8 py-16 lg:flex lg:items-center lg:justify-center lg:space-x-16">
      <div className="hidden lg:block w-1/4">
        <img 
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt="Movie Poster"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="lg:w-2/4 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl font-bold">{movie?.title} <span className="text-gray-400">(2024)</span></h1>
        <p className="text-gray-400">Directed by <a href="#" className="text-green-500">Halina Reijn</a></p>
        <p className="text-lg">{movie?.overview}</p>
        <div className="space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
            Add to Watchlist
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md">
            Share
          </button>
        </div>
      </div>
      </div>
      </section>
      <Reviewsection />

    
        </div>
    )
}
export default MoviePage;