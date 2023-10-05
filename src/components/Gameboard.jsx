// import React from 'react';

import { useEffect, useState } from 'react';
import Card from './Card';

function CreateCards({ agents }) {
  const cardNumber = 8;
  const cards = [];

  for (let i = 0; i < cardNumber; i++) {
    cards.push(
      <Card
        key={i}
        character={agents[i].displayName}
        backgroundImage={agents[i].displayIcon}
      />
    );
  }

  return cards;
}

export default function Gameboard() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents/')
      .then((response) => response.json())
      .then((json) => {
        setAgents(json.data);
        console.log(json.data);
      });
    // console.log(api);
  }, []);

  return (
    <>
      {agents.length > 0 ? <CreateCards agents={agents} /> : <p>Loading...</p>}
    </>
  );
}
