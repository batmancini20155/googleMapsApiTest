
var axios = require('axios'); // initialize the Axios object. AXios is a library that makes XMLHttpRequests simple for the developer

// import axios from 'axios';

var input = 'heckscher';
var types = 'establishment';
var latitude = '40.874811';
var longitude = '-73.421871';
var radius = '2000';
var apiKey = process.env.API_KEY;

var config = {
  method: 'get', // GET method because were are getting/pulling data from the Google Maps API
  url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=${types}&location=${latitude}%2C${longitude}&radius=${radius}&key=${apiKey}`,
  headers: { } // Headers are extra options that the API provides, giving you additional ways for how the data is sent to you
}; // NOTE: this link should be edited to include string literals i.e. ${var}, as the value of the necessary parameters

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
