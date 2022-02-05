import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
//
import { cards } from './data/cards';

//
import SingleCardDisplay from './components/SingleCardDisplay';

//displays a given number cards at given intervals, user keps track of the count and enters the final count at the end of the run of cards, app compares user count to actual and displays both.

//cards will be dsiplayed as images, will be stored in an object with unique card id, card name, card count value

// const randNum = Math.floor(Math.random() * (52 + 1));

function App() {
  const [count, setCount] = useState(0);

  const deckArray = cards;
  let currentCard;
  const shuffle = arr => {
    arr.sort(() => 0.5 - Math.random());
  };

  const drawCard = arr => {
    let drawnCard = arr.pop();
    currentCard = drawnCard.id;
    setCount(count => count + drawnCard.value);
    console.log(drawnCard);
  };

  const dealCards = arr => {
    const numCards = arr.length;
    let x = 0;
    let cardInterval = setInterval(() => {
      drawCard(arr);
      console.log(arr.length, numCards);
      if (++x === numCards) {
        clearInterval(cardInterval);
      }
    }, 1000);
  };

  return (
    <div className='App'>
      <button onClick={() => dealCards(deckArray)}>go</button>
      <SingleCardDisplay cardId={currentCard} />
    </div>
  );
}

export default App;
