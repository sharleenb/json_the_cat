const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  const breedUrl = url + breedName;
  request(breedUrl, (error, response, body) => {
    const data = JSON.parse(body);
    let desc = null;
    if (data.length === 0) {
      error = "There is no information on that breed, please try again!";
    } else {
      desc = data[0].description;
    }
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };
