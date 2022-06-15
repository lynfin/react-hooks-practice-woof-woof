import React, { useState, useEffect } from "react";
import Header from "./Header";
import DogSummary from "./DogSummary";

// ┌ └ ─ ├ │
// App
// ├ Header
// │  ├ Filter
// │  └ DogBar
// └ DogSummary

function App() {
  const noPup = { name: "", image: "", isGoodDog: true };

  const [pups, setPups] = useState([]);
  const [selectedPup, setSelectedPup] = useState(noPup);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((pups) => {
        setPups(pups);
        setSelectedPup(pups[0]);
      });
  }, []);

  const handleChangeFiltering = () => {
    setIsFiltering((wasFiltering) => !wasFiltering);
  };
  const handleUpdatePup = (updatedPup) => {
    const updatedPups = pups.map((pup) =>
      pup.id === updatedPup.id ? updatedPup : pup
    );
    setPups(updatedPups);
    setSelectedPup(updatedPup); // LKF Don't think I should have to do this.  Need useEffect?
  };

  const handleSelectedPup = (pup) => {
    setSelectedPup(pup);
  };

  return (
    <div className="App">
      <Header
        pups={pups}
        onSelectedPup={handleSelectedPup}
        isFiltering={isFiltering}
        onChangeFiltering={handleChangeFiltering}
      />
      <DogSummary pup={selectedPup} onUpdatedPup={handleUpdatePup} />
    </div>
  );
}

export default App;
