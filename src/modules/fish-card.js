import React from "react";

const FishCard = ({
  Genus, //
  Species, //
  Vulnerability, // stats
  Length, // stats
  Dangerous, // stats
  Electrogenic, // stats
  Comments, //-
  image, //-
}) => {
  if (!Genus) {
    return <h3>...Loading</h3>;
  }
  return (
    <article>
      <h2>
        {Genus} {Species}
      </h2>
      <img src={image} alt="fish pic" />
      <fieldset>
        <legend>Stats</legend>
        <ul>
          <li>
            <span role="img" aria-label="">
              ⚠️
            </span>{" "}
            Danger: {Dangerous}{" "}
            <span role="img" aria-label="">
              ⚠️
            </span>{" "}
          </li>
          <li>Vulnerability: {Vulnerability}</li>
          <li>Length: {Length} cm</li>
          <li>
            <span role="img" aria-label="">
              ⚡
            </span>{" "}
            Lightning magic: {Electrogenic}
            <span role="img" aria-label="">
              ⚡
            </span>
          </li>
        </ul>
      </fieldset>
      <h3>Description:</h3>
      <p>{Comments}</p>
    </article>
  );
};

export default FishCard;
