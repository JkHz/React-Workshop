import React from 'react';

var FavoritesItem = props => (
  <div className = 'favorite' id = {props.favorite.idDrink} onClick = {() => {
    props.removeFavorites(props.favorite);
  }}>
    <h4>{props.favorite.strDrink}</h4>
    <div className = 'imgDiv'>
      <img src = {props.favorite.strDrinkThumb}/>
    </div>
  </div>
)
export default FavoritesItem;