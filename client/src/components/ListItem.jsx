import React from 'react';

var ListItem = props => (
  <div onClick = {() => {props.handleFavoritesClick(props.listItem)}} className = 'listItem' id = {props.listItem.idDrink}>
    <h4>{props.listItem.strDrink}</h4>
    <div className = 'imgDiv'>
      <img src = {props.listItem.strDrinkThumb}/>
    </div>
  </div>
)
export default ListItem;