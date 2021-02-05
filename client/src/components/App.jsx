import React from 'react';
import List from './List.jsx';
import Favorites from './Favorites.jsx';
import dummy from '../../../public/data/dummy.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      favorites: []
    };
    this.handleFavoritesClick = this.handleFavoritesClick.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);
  }
  componentDidMount() {
    this.setState({
      drinks: dummy.drinks
    })
  }
  handleFavoritesClick(input) {
    this.setState({
      favorites: this.state.favorites.concat([input])
    })
  }
  removeFavorites(input) {
    this.setState({
      favorites: this.state.favorites.filter((item) => (
        item.idDrink !== input.idDrink
      ))
    })
  }
  render() {
    return (
      <div>
        <Favorites removeFavorites = {this.removeFavorites} favorites = {this.state.favorites}/>
        <List handleFavoritesClick = {this.handleFavoritesClick} list = {this.state.drinks}/>
      </div>
    )
  }
}