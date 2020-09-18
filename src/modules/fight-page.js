import React from "react";
import FishCard from "./fish-card";
import { getRandomFishData } from "./fetch-helper";

const FightPage = () => {
  const [fishData, setFishData] = React.useState(null);
  // const [opponentFishData, setOpponentFishData] = React.useState(null);   --> Accept button
  const [count, setCount] = React.useState(0);

  // button activated effect - rejects button
  React.useEffect(() => {
    getRandomFishData().then((data) => {
      setFishData(data);
    });
  }, [count]);
  return (
    <>
      <h1 className="fight__title">Fishcious choice, player.</h1>
      <FishCard {...fishData} />
      <button className="accept__btn">I'm hooked - Accept.</button>
      <button
        className="reject__btn"
        onClick={() => {
          // Increases state variable (count) by 1 b/c it is a dependency (line 15) for our api data effect
          // Changing count runs the effect (b/c its a dependency)
          // Effect gives us new random fish data every time its run
          setCount(count + 1); //number (+1) doesn't matter as long as its not none
        }}
      >
        A load of pollocks! - Choose again.
      </button>
    </>
  );
};

export default FightPage;
