import React from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
const placeholderImage = 'https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

   const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const handleCardClick = () => {
    window.open(movie.imdb_url, "_blank");
  };

  const handleFavoriteIconClick = (event) => {
    event.stopPropagation(); 
    handleFavoriteClick();
  };



  return (
    <Card  onClick={handleCardClick} sx={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }} >
      <CardMedia
        component="img"
        height="140"
        image={ placeholderImage} 
        alt={movie.movie}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.movie}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.rating}
        </Typography>
        <IconButton onClick={handleFavoriteIconClick}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
