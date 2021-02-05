import React from 'react';
import FavoritesItem from './FavoritesItem.jsx';

var Favorites = (props) => {
  if (props.favorites.length > 0) {
    return (
      <div>
        <h3>Favorites</h3>
        <div className = 'favoritesList'>
          {props.favorites.map((favorite, index) => (
            <FavoritesItem removeFavorites = {props.removeFavorites} favorite = {favorite} key = {index}/>
          ))}
        </div>
      </div>
    )
  }
  return null;
}

export default Favorites;