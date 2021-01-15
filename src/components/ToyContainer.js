import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteClick, onUpdatedLikes }) {

  const toyCard = toys.map(toy => {
    return (
      <ToyCard key={toy.id} toy={toy} onDeleteClick={onDeleteClick} onUpdatedLikes={onUpdatedLikes} />
    )
  })

  return (
    <div id="toy-collection">{toyCard}</div>
  );
}

export default ToyContainer;
