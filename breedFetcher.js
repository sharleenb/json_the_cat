const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q="

const fetchBreedDescription = function(breedName, callback) {
  const breedUrl = url + breedName;
  request(breedUrl, (error, response, body) => {
    const data = JSON.parse(body);
    const desc = data[0].description;
    callback(error, desc)
  })
};

module.exports = { fetchBreedDescription };


