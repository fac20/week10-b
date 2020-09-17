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
    57917,
    7198,
    5205,
    25417,
    22822,
    22963,
    1353,
    66825,
    7199,
  ];
  const randomNum = Math.floor(Math.random() * speciesCodeArr.length);
  const randFishNo = speciesCodeArr[randomNum];
  //  fetch fish data for species number random generated no.
  return fetchHelper(`species/${randFishNo}`);
};

export { fetchHelper, getRandomFishData };
