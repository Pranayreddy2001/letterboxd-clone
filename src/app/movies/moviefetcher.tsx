'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Movie } from './movie';
export const useFetchMovie = (url: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const headers={
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODhjZjY5OTk1MGRhMWEzM2U1OGQxZTMxM2JiNTY3MyIsIm5iZiI6MTcxNjgxOTE0OC45ODQsInN1YiI6IjY2NTQ5NGNjZDY1MDUzMjcxOTVhOWNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l4iJsTTaKNU3Rx61UUh9aWFjjAj0tD9egCmqsgRuttk'
            }
          };
        const response = await axios.get(url,headers);

        const data = response.data;

        const movieDetails: Movie = {
          id: data.id,
          title: data.title,
          releaseDate: data.release_date,
          overview: data.overview,
          rating: data.vote_average,
          likes: data.vote_count,
          poster_path: data.poster_path,
          background_path: data.backdrop_path,
        };

        setMovie(movieDetails);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching movie details.');
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchMovie();
    }
  }, [url]);

  return { movie, loading, error };
};
