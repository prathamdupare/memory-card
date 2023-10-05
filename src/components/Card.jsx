// import React from "react";
// import { useState } from "react";

export default function Card({ character, backgroundImage }) {
  return (
    <div className="character-grid">
      <img className="character-image" src={backgroundImage} alt={character} />
      <div className="character-name">{character}</div>
    </div>
  );
}
