import React from "react";

const FishCard = ({
  Genus,
  Species,
  Vulnerability,
  Length,
  Dangerous,
  Electrogenic,
  Comments,
  image,
}) => {
  if (!Genus) {
    return <h3>...Loading</h3>;
  }
  return (
    <article className="card">
      <h2>
        {Genus} {Species}
      </h2>
      <img src={image} alt="fish pic" />
      <fieldset>
        <legend>Stats</legend>
        <dl>
          <li className="stats">
            <span role="img" aria-label="">
              🔥
            </span>
            <span role="img" aria-label=""></span> Danger: {Dangerous}
          </li>
          <li className="stats">
            {" "}
            <span role="img" aria-label="">
              🥀
            </span>{" "}
            Vulnerability: {Vulnerability}
          </li>
          <li className="stats">
            {" "}
            <span role="img" aria-label="">
              📏
            </span>{" "}
            Length: {Length} cm
          </li>
          <li className="stats">
            <span role="img" aria-label="">
              ⚡
            </span>{" "}
            Lightning magic: {Electrogenic}
          </li>
        </dl>
      </fieldset>
      <h3>Description:</h3>
      <p dangerouslySetInnerHTML={{ __html: Comments }} />
    </article>
  );
};

export default FishCard;
