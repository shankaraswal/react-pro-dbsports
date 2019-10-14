
import React, { Component } from 'react';
import './Container.css';
import Header from '../Header/Header';
import MastHead from '../MastHead/Masthead';
import SearchBar from '../SearchBar/Searchbar';
import SoccerPlayers from '../SoccerPlayers/Soccerplayers';

class Container extends Component {
  render() {
    return (
       <section>
          <Header />  
          <MastHead /> 
          
          <SoccerPlayers />  
      </section>

    );
  }
}

export default Container;
