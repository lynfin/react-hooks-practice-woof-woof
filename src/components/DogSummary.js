import React from "react";

function DogSummary({ pup, onUpdatedPup }) {
  const { image, name, isGoodDog } = pup;

  const handleClick = () => {
    const isGood = !isGoodDog;
    fetch(`http://localhost:3001/pups/${pup.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isGoodDog: isGood }),
    })
      .then((r) => r.json())
      .then((updatedPup) => {
        onUpdatedPup(updatedPup);
      });
  };
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <button onClick={handleClick}>
          {isGoodDog ? "Good Dog!" : "Bad Dog!"}
        </button>
      </div>
    </div>
  );
}

export default DogSummary;
