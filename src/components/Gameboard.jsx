import { useEffect, useState } from 'react';
import Card from './Card';

function CreateCards({ agents, areAllFlipped, toggleAllCards }) {
  const cardNumber = 8;
  const cards = [];

  for (let i = 0; i < cardNumber; i++) {
    cards.push(
      <Card
        key={i}
        character={agents[i].displayName}
        backgroundImage={agents[i].displayIcon}
        isFlipped={areAllFlipped}
        onClick={toggleAllCards}
      />,
    );
  }

  return cards;
}

export default function Gameboard() {
  const [agents, setAgents] = useState([]);
  const [areAllFlipped, setAreAllFlipped] = useState(false);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents/')
      .then((response) => response.json())
      .then((json) => {
        setAgents(json.data);
        console.log(json.data);
      });
  }, []);

  const toggleAllCards = () => {
    setAreAllFlipped(!areAllFlipped);
  };

  return (
    <>
      {agents.length > 0 ? (
        <CreateCards
          agents={agents}
          areAllFlipped={areAllFlipped}
          toggleAllCards={toggleAllCards}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
