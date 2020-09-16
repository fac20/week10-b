const API_BASE = "https://fishbase.ropensci.org/";

const fetchHelper = (url) => {
  fetch(`${API_BASE}${url}`).then(checkResponse);
};

const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
};

export { fetchHelper, checkResponse };
