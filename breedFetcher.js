const request = require("request");

const url =
  "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2].slice(0, 3);

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (url !== true) {
    console.log("There is no information on that breed, please try again!");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
