require('dotenv').config();
const Clarifai = require('clarifai');
var GphApiClient = require('giphy-js-sdk-core');
client = GphApiClient(process.env.GIPHY_KEY);

// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: process.env.CLARIFAI_KEY});

var guess

// Predict the contents of an image by passing in a URL.
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
  .then(response => {
    guess= JSON.stringify(response.outputs[0]["data"]["concepts"][0]["name"]);
    guessAccuracy = JSON.stringify(response.outputs[0]["data"]["concepts"][0]["value"]);
  })
  .catch(err => {
    console.log(err);
  });
  
  client.search('gifs', {"q": "cats", "limit": "1"})
  .then((response) => {
    response.data.forEach((gifObject) => {
      console.log(gifObject.url)
    })
  })
  .catch((err) => {
    console.log(err);
  })
  
  function addImageToApp(index) {
    var imgType = document.getElementById("hidden-type" + index).value;
    var imgValue = document.getElementById("hidden-val" + index).value;
    
    if(imgType === "url") {
      app.inputs.create({
        url: imgValue
      }).then(
        function(response) {
          alert("Image successfully added!");
        },
        function(err) {
          alert("Error Adding Image. Check to see if it is a duplicate.");
        }
      );
    }
    
    else if(imgType === "base64") {
      app.inputs.create({
        base64: imgValue
      }).then(
        function(response) {
          alert("Image successfully added!");
        },
        function(err) {
          alert("Error Adding Image. Check to see if it is a duplicate.");
        }
      );
    }
  }