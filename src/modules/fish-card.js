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
    <article className="card">
      {/* style={{backgroundImage: `url(${image})` }}> */}
      <h2>
        {Genus} {Species}
      </h2>
      <img src={image} alt="fish pic" />
      <fieldset>
        <legend>Stats</legend>
        <ul>
          <li className="stats">
            {/* <span role="img" aria-label="">
              
            </span>{" "} */}
            Danger: {Dangerous}{" "}
            {/* <span role="img" aria-label="">
              ⚠️
            </span>{" "} */}
          </li>
          <li className="stats">Vulnerability: {Vulnerability}</li>
          <li className="stats">Length: {Length} cm</li>
          <li className="stats">
            {/* <span role="img" aria-label="">
              ⚡
            </span>{" "} */}
            Lightning magic: {Electrogenic}
            {/* <span role="img" aria-label="">
              ⚡
            </span> */}
          </li>
        </ul>
      </fieldset>
      <h3>Description:</h3>
      <p>{Comments}</p>
    </article>
  );
};

export default FishCard;
