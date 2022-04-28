
// let div1 = document.getElementById('div1');
// let myNewElement = document.createElement("P");
// myNewElement.innerHTML = "Hi Mom";
// div1.appendChild(myNewElement);



// let gMapsAutoComplete = function () {
//   console.log('hi');
// }
//
// gMapsAutoComplete();

// The code snippet below is from here:
// https://developers.google.com/maps/documentation/places/web-service/autocomplete#maps_http_places_autocomplete_amoeba-js
// the snippet below is for the Google Places: Autocomplete API
// there are many additional parameters that can be add/subtracted from the http link depending on what the API is to search for
// BELOW IS THE UNEDITED METHOD
var axios = require('axios'); // initialize the Axios object. AXios is a library that makes XMLHttpRequests simple for the developer

var config = {
  method: 'get', // GET method because were are getting/pulling data from the Google Maps API
  url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=YOUR_API_KEY',
  headers: { } // Headers are extra options that the API provides, giving you additional ways for how the data is sent to you
}; // NOTE: this link should be edited to include string literals i.e. ${var}, as the value of the necessary parameters

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


// NOTE: Google Maps does not support JPN lang for autocomplete. Look into a JP to EN translator...
// ...that will convert the JP input to EN before sending Google Places API

// THIS IS THE EDITED SNIPPET WITH STRING LITERALS FOR PARAMETERS
// note: must change '' to `` for string literals in url
var axios = require('axios'); // initialize the Axios object. AXios is a library that makes XMLHttpRequests simple for the developer
var theInput = document.getElementById('myInput').value;
var radiusOfSearch; // likely a drop down, or maybe just default to 50miles

// NOTE: THIS MAY NEED TO BE IMPORTED AT THE TOP of file
var API_KEY = process.env.API_KEY;

var config = {
  method: 'get', // GET method because were are getting/pulling data from the Google Maps API
  url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${theInput}&types=establishment&location=37.76999%2C-122.44696&radius=${radiusOfSearch}&key=YOUR_API_KEY`,
  headers: { } // Headers are extra options that the API provides, giving you additional ways for how the data is sent to you
}; // NOTE: this link should be edited to include string literals i.e. ${var}, as the value of the necessary parameters

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


//------------------------------------------------------
// try with vanilla XMLHttpRequest
const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${theInput}&types=establishment&location=37.76999%2C-122.44696&radius=${radiusOfSearch}&key=YOUR_API_KEY`; // replace me
const xhr = new XMLHttpRequest(); // creates new object

// handles response
xhr.responseType = "json"; // change property as needed
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) { // .DONE should = 200 for this to run, or 400, etc. if error
    // Code to execute with 'response'
  }
};

// opens request and sends object with the properties that you set
xhr.open("GET", url); // replace as need ("GET", "POST", "PUT", "DELETE", etc.)
xhr.send(); // send http request, function in xhr.onreadystatechange begins updating
