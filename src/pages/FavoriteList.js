import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { Grid } from '@mui/material';

const FavoriteList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Grid container spacing={3}>
      {favorites.map((movie) => (
        <Grid item xs={12} sm={6} md={4} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteList;
