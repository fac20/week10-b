import React from "react";
import "./App.css";
import FishCard from "./modules/fish-card";
import { getRandomFishData } from "./modules/fetch-helper";

function App() {
  const [fishData, setFishData] = React.useState(null);
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
