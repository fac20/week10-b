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
  return (
    <article>
      <h2>
        {Genus} {Species}
      </h2>
      <img src={image} alt="fish pic" />
      <fieldset>
        <legend>Stats</legend>
        <ul>
          <ol>Danger: {Dangerous}</ol>
          <ol>Vulnerability: {Vulnerability}</ol>
          <ol>Length: {Length}</ol>
          <ol>Lightning magic: {Electrogenic}</ol>
        </ul>
      </fieldset>
      <h3>Description:</h3>
      <p>{Comments}</p>
    </article>
  );
};

export default FishCard;
