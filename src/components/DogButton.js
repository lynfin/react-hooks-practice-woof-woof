import React from "react";

function DogButton({ pup, onSelectedPup }) {
  function handleClickPup(e) {
    onSelectedPup(pup);
  }
  return (
    <span name={pup.name} id={pup.id} key={pup.id} onClick={handleClickPup}>
      {pup.name}
    </span>
  );
}

export default DogButton;
