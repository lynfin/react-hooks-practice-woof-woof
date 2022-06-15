import React from "react";
import DogButton from "./DogButton";

function Header({ pups, onSelectedPup, isFiltering, onChangeFiltering }) {
  const filterString = isFiltering
    ? "Filter good dogs: ON"
    : "Filter good dogs: OFF";

  return (
    <>
      <div id="filter-div">
        <button onClick={onChangeFiltering} id="good-dog-filter">
          {filterString}
        </button>
      </div>
      <div id="dog-bar">
        {pups.map((pup) => (
          <DogButton pup={pup} onSelectedPup={onSelectedPup} key={pup.id} />
        ))}
      </div>
    </>
  );
}

export default Header;
