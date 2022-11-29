import './App.css';
import React from 'react';
import Nav from './Components/Nav/Nav.js';
import CardDisplay from './Components/Card/CardDisplay.js';
import Header from './Components/Nav/Header.js';
import ToDo from './Components/ToDo/ToDo.js';
import { Cardlist } from './Components/Card/CardList.js';
import { useState } from 'react';


const App = () => {
  const [cardlist, setCardList] = useState(Cardlist);
  
  return (
    <div className="App">
      <Header />
      <Nav />
      <CardDisplay classes={cardlist}/>
      <ToDo />
    </div>
  );

}

export default App;
