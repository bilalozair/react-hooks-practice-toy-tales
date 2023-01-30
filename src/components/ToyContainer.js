import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onLikeClicked, onDelClicked}) {

  const toyCard = toys.map((toy) => {
    return <ToyCard key ={toy.id} toy = {toy} onLikeClicked = {onLikeClicked} onDelClicked={onDelClicked}/>
  })

  return (
    <div id="toy-collection">
      {toyCard}  
    </div>
  );
}

export default ToyContainer;
