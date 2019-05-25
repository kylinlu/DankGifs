require('dotenv').config();
const Clarifai = require('clarifai');
var GphApiClient = require('giphy-js-sdk-core');
client = GphApiClient(process.env.GIPHY_KEY);

// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: process.env.CLARIFAI_KEY});

// Predict the contents of an image by passing in a URL.
app.models.predict(Clarifai.GENERAL_MODEL, 'https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/why_you_should_go_mountain_climbing_1.jpg?itok=wYnlNZir')
  .then(response => {
    var guess1 = JSON.stringify(response.outputs[0]["data"]["concepts"][0]["name"]);
    var guess2 = JSON.stringify(response.outputs[0]["data"]["concepts"][1]["name"]);
    var guess3 = JSON.stringify(response.outputs[0]["data"]["concepts"][2]["name"]);
    console.log(guess1)
    console.log(guess2)
    console.log(guess3)
    client.search('gifs', {"q": `${guess1} ${guess2} ${guess3}`, "limit": "1"})
    .then((response) => {
      response.data.forEach((gifObject) => {
        console.log(gifObject.url)
      })
    })
  })
  .catch(err => {
    console.log(err);
  });
  
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