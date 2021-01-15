import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showToys, setShowToys] = useState([])
  // const [newToy, setNewToy] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then((toyObj) => setShowToys(toyObj))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToyClick(newToy){
    const newToysList = [...showToys, newToy]
    setShowToys(newToysList)
  }

  function deleteClick(id){
    const newToysList = showToys.filter(toy => toy.id !== id )
    setShowToys(newToysList)
  }

  function handleUpdatedLikes(newToyObj){
    const updatedToyObj = showToys.map(toy => 
      toy.id === newToyObj.id ? newToyObj : toy 
    )
    setShowToys(updatedToyObj)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToyClick={handleNewToyClick} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={showToys} onDeleteClick={deleteClick} onUpdatedLikes={handleUpdatedLikes} />
    </>
  );
}

export default App;
