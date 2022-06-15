import React, { useState, useEffect } from "react";

function App() {
  const [pups, setPups] = useState([]);
  const [selectedDog, setSelectedDog] = useState(0);
  const dogInfo = {
    name: pups[selectedDog].name,
    image: pups[selectedDog].image,
    isGoodDog: pups[selectedDog].isGoodDog,
  };

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((pups) => setPups(pups));
  }, []);

  console.log("Pups", pups);
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {pups.map((pup) => (
          <span>{pup.name}</span>
        ))}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src={dogInfo.image} alt={dogInfo.name} />
          <h2>{dogInfo.name}</h2>
          <button>{dogInfo.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
