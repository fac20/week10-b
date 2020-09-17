import React from "react";
import FishCard from "./fish-card";
import { getRandomFishData } from "./fetch-helper";

const FightPage = () => {
  const [fishData, setFishData] = React.useState(null);
  // const [opponentFishData, setOpponentFishData] = React.useState(null);   --> Accept button

  // button activated effect - rejects button
  React.useEffect(() => {
    getRandomFishData().then((data) => {
      setFishData(data);
    });
  }, []);
  return (
    <>
      <h1 className="fight__title">Being weighed in the scales</h1>
      <FishCard {...fishData} />
      <button className="accept__btn">I'm hooked - Accept</button>
      <button className="reject__btn"
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
