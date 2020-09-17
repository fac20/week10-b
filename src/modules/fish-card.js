import React from "react";

const fishCard = ({
  Genus, //
  Species, //
  //   Fresh,
  //   Saltwater,
  //   BodyShapeI,
  Vulnerability, // stats
  Length, // stats
  Dangerous, // stats
  Electrogenic, // stats
  Description, //-
  image, //-
}) => {
  return (
    <article>
      <h2>
        {Genus}; {Species}
      </h2>
      <image>{image}</image>
      <fieldset>
        <legend>Stats</legend>
        <ul>
          <ol>Danger: {Dangerous}</ol>
          <ol>Vulnerability: {Vulnerability}</ol>
          <ol>Length: {Length}</ol>
          <ol>Electrogenic: {Electrogenic}</ol>
        </ul>
      </fieldset>
      <h3>Description:</h3>
      <p>{Description}</p>
    </article>
  );
};
