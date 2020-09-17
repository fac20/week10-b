const API_BASE = "https://fishbase.ropensci.org/";

const fetchHelper = (url) => {
  return fetch(`${API_BASE}${url}`).then(checkResponse);
};

const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
};

const getRandomFishData = () => {
  // generate random number between 1 and 34342
  const speciesCodeArr = [
    2,
    57918,
    7198,
    5458,
    25413,
    22826,
    4563,
    1353,
    66829,
    7199,
  ];
  const randomArrayIndex = Math.floor(Math.random() * speciesCodeArr.length);
  const randSpeciesNo = speciesCodeArr[randomArrayIndex];
  //  fetch fish data for species number random generated no.
  return fetchHelper(`species/${randSpeciesNo}`).then((res) => {
    return res.data[0];
  });
};

export { fetchHelper, getRandomFishData };
