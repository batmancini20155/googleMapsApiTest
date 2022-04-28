
// var axios = require('axios'); // initialize the Axios object. AXios is a library that makes XMLHttpRequests simple for the developer
// const apiKey = process.env.API_KEY || 'AIzaSyAc_NXxNk3kqyBO5qcAHGnWfIV7arBgAPo';
const apiKey = 'AIzaSyAc_NXxNk3kqyBO5qcAHGnWfIV7arBgAPo';
var input = 'heckscher';
var latitude = '40.874811';
var longitude = '-73.421871';
var radius = '2000';
var types = 'establishment';

const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=${types}&location=${latitude}%2C${longitude}&radius=${radius}&key=${apiKey}`;
const xhr = new XMLHttpRequest(); // creates new object

// handles response
xhr.responseType = "json"; // change property as needed
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) { // .DONE should = 200 for this to run, or 400, etc. if error
    // Code to execute with 'response'
    console.log(xhr.response);
  }
};

// opens request and sends object with the properties that you set
xhr.open("GET", url); // replace as need ("GET", "POST", "PUT", "DELETE", etc.)
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Vary', 'Origin');
xhr.setRequestHeader('Content-type', 'application/xml');
xhr.send(); // send http request, function in xhr.onreadystatechange begins updating


/*
var config = {
  method: 'get', // GET method because were are getting/pulling data from the Google Maps API
  headers: { } // Headers are extra options that the API provides, giving you additional ways for how the data is sent to you
}; // NOTE: this link should be edited to include string literals i.e. ${var}, as the value of the necessary parameters

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
*/


// This works
/*
https://maps.googleapis.com/maps/api/place/autocomplete/json
  ?input=heckscher
  &location=40.874811182529%2C-73.42187198502339
  &radius=20000
  &types=establishment
  &key=AIzaSyAc_NXxNk3kqyBO5qcAHGnWfIV7arBgAPo

*/
