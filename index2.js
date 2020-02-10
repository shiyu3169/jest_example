const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people').then(res =>
    res.json().then(data => ({ count: data.count, results: data.results }))
  );
};

const getPeopleAsync = async fetch => {
  const res = await fetch('https://swapi.co/api/people');
  const data = await res.json();
  return { count: data.count, results: data.results };
};

// getPeopleAsync(fetch);

module.exports = { getPeoplePromise, getPeopleAsync };
