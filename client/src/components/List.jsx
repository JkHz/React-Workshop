import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => (
  <div className = 'list'>
    {props.list.map((listItem, key) => {
      return (
        <ListItem handleFavoritesClick = {props.handleFavoritesClick} listItem = {listItem} key = {key}/>
      )
    })}
  </div>
)

export default List;