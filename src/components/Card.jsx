// import React from "react";
// import { useState } from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Card({
  character,
  backgroundImage,
  isFlipped,
  onClick,
}) {
  const [isLocalFlipped, setIsLocalFlipped] = useState(isFlipped);

  useEffect(() => {
    setIsLocalFlipped(isFlipped);
  }, [isFlipped]);

  const handleClick = () => {
    setIsLocalFlipped(!isLocalFlipped);
    onClick();
  };

  return (
    <ReactCardFlip
      isFlipped={isLocalFlipped}
      fliDirection="vertical"
      className="card-hold"
    >
      <div className="card-front" onClick={handleClick}>
        <img
          className="character-image"
          src={backgroundImage}
          alt={character}
        />

        <div className="character-name">{character}</div>
      </div>

      <div className="card-back" onClick={handleClick}>
        Back
        <div></div>
      </div>
    </ReactCardFlip>
  );
}
