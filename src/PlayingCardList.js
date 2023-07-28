import React from "react";
import { v4 as uuid } from 'uuid';
import PlayingCard from "./PlayingCard.js";
import "./PlayingCardList.css";
import { useAxios } from "./hooks.js";


// Renders list of playing cards.
// Can add new card at random
function PlayingCardList() {
  // const [cards, setCards] = useState([]);
  const [cards, setCards] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');

  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={setCards}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}


PlayingCardList.defaultProps = {

};


export default PlayingCardList;
