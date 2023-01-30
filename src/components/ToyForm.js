import React , {useState} from "react";

function ToyForm({onAddNewToy}) {

  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] = useState("")
  // const [newToySubmission, setNewToySubmission] = useState([])

  function onFormSubmit(event){
    event.preventDefault()
    const toyInfoToPOST = {
      name: newToyName,
      image: newToyImage,
      likes: 0
    }

    // setNewToySubmission(toyInfoToPOST)
  
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(toyInfoToPOST) 
      }
    )
    .then(r=> r.json())
    .then((newToy) => onAddNewToy(newToy))
  }


  function onNewToyImageChange(event) {
    setNewToyImage(event.target.value)
    console.log(newToyImage)
  }
  function onNewToyNameChange(event) {
    setNewToyName(event.target.value)
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {onFormSubmit}>
        <h3>Create a toy!</h3>
        <input onChange = {onNewToyNameChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange = {onNewToyImageChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
