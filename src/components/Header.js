import React from "react";
import DogButton from "./DogButton";

function Header({ pups, onSelectedPup, isFiltering, onChangeFiltering }) {
  const filterString = isFiltering
    ? "Filter good dogs: ON"
    : "Filter good dogs: OFF";

  const filteredPups = isFiltering ? pups.filter((pup) => pup.isGoodDog) : pups;
  console.log("Filtered count", filteredPups.length);
  return (
    <>
      <div id="filter-div">
        <button onClick={onChangeFiltering} id="good-dog-filter">
          {filterString}
        </button>
      </div>
      <div id="dog-bar">
        {filteredPups.map((pup) => (
          <DogButton pup={pup} onSelectedPup={onSelectedPup} key={pup.id} />
        ))}
      </div>
    </>
  );
}

export default Header;
