import React, { useState , useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toys => {
        setToys(toys)
      })
  }
  ,[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(newToy) {
    setToys([...toys,newToy])
  }

  function handleLikeBtnClick(toyID){
    const updatedToyList = toys.map((toy) => {
      if (toy.id === toyID) {
        toy.likes++
        return toy
      }
      return toy
      })
    
    setToys(updatedToyList)
  }

  function handeDelBtnClick(toyID){
      
    setToys(toys.filter(toy => toy.id !== toyID))

  }

  const toysToDisplay = toys


  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy = {handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toysToDisplay} onLikeClicked ={handleLikeBtnClick} onDelClicked = {handeDelBtnClick}/>
    </>
  );
}

export default App;
