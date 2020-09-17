import React from "react";
import "./App.css";
import FishCard from "./modules/fish-card";
import { getRandomFishData } from "./modules/fetch-helper";

function App() {
  const [fishData, setFishData] = React.useState(null);
  // opponentFish data

  // button activated effect - rejects button
  React.useEffect(() => {
    getRandomFishData().then((data) => {
      setFishData(data);
    });
  }, []);

  return (
    // return landing page on first load - logo and randomizer button
    // <img src={logo} className="App-logo" alt="logo" />
    <div className="App">
      <header className="App-header"></header>
      {/* title - some kind of fish pun */}
      <body className="App-body">
        <FishCard {...fishData} />
        {/* accept or reject buttons */}
      </body>
    </div>
  );
}
//landing page function
//fight page function
export default App;
