const request = require("request");

const url =
  "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2]


request(url, (error, response, body) => {
  const data = JSON.parse(body)
  if (error) {
    console.log(error);
  } else if (data.length === 0) {
    console.log("There is no information on that breed, please try again!");
  } else {
    console.log(data[0].description);
  }
});

