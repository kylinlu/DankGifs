require('dotenv').config();
const Clarifai = require('clarifai');

// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: process.env.API_KEY});

// Predict the contents of an image by passing in a URL.
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });