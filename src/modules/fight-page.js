import React from "react";
import FishCard from "./fish-card";
import { getRandomFishData } from "./fetch-helper";

const FightPage = () => {
  const [fishData, setFishData] = React.useState(null);
  const [opponentFishData, setOpponentFishData] = React.useState(null);

  // button activated effect - rejects button
  React.useEffect(() => {
    getRandomFishData().then((data) => {
      setFishData(data);
    });
  }, []);
  return (
    <>
      <h1>Being weighed in the scales</h1>
      <FishCard {...fishData} />
      <button>I'm hooked - Accept</button>
      <button
        onClick={() => {
          getRandomFishData().then((data) => {
            setFishData(data);
          });
        }}
      >
        A load of pollocks! - Choose again.
      </button>
    </>
  );
};

export default FightPage;
