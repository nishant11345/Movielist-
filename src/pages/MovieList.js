import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';
import { Grid, CircularProgress, Typography, Box } from '@mui/material';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies); 

 if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh"> {/* Center loader vertically */}
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'failed') {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
