import React from "react";

function ToyCard({toy, onLikeClicked, onDelClicked}) {


  function incrementLikes(){
    // setNLikes(nLikes => nLikes++)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({likes: toy.likes + 1})
    })
    onLikeClicked(toy.id)
  }

  function handleDonate(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    onDelClicked(toy.id)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick = {incrementLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick = {handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
