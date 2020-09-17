import React from "react";
import "./App.css";
import FishCard from "./modules/fish-card";
import { getRandomFishData } from "./modules/fetch-helper";

function App() {
  const [fishData, setFishData] = React.useState(fish);
  console.log(fishData);
  React.useEffect(() => {
    getRandomFishData().then((data) => {
      setFishData(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        <FishCard {...fishData} />
      </body>
    </div>
  );
}

export default App;

const fish = {
  SpecCode: 1353,
  Genus: "Serranus",
  Species: "cabrilla",
  BodyShapeI: "fusiform / normal",
  Vulnerability: 35.98,
  Length: 40,
  Dangerous: "harmless",
  DangerousRef: null,
  Electrogenic: "no special ability",
  Comments:
    "Found on the shelf and upper slope on rocks, <i>Posidonia</i> beds, sand and mud bottoms (Ref. 5506).  Feed on fishes, cephalopods and crustaceans (Ref. 27121).",
  image: "https://www.fishbase.de/images/species/Secab_u0.jpg",
};
