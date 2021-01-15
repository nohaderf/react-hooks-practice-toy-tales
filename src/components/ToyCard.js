import React from "react";

function ToyCard({ toy , onDeleteClick, onUpdatedLikes }) {

  const { id, name, image, likes } = toy

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE",
    })
    onDeleteClick(id)
  }

  function handleLikes(){
    const newTotalLikes = {
      likes: likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTotalLikes)
    })
    .then(r => r.json())
    .then(updatedToyObj => onUpdatedLikes(updatedToyObj))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={likes}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );

}

export default ToyCard;
