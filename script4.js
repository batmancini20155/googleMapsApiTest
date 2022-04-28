
// Below is an example of using the google Places javascript api to retrieve the details
// of a place given an input query
// see that myRequest variable, the query has been hardcoded into the request
// the request will ask the api to search for a place that would match 'Heckscher'
// and it will return the data I asked for in the 'fields' array
// the results are currently being searching for based on my machine's IP address location

var theMapContainer;
var placesAPI;

// This works!!
// google Maps javascript API must be written inside of initMap()
// initMap() is linked to the google servers, see the <script> in index.html
function initMap() {
  // PlacesService requires parameter of 'attrContainer' must be type HTMLDivElement|Map (contain a google Map object)
  // therefore we must first create an <div> in my index.html that contains a google map object, see below
  theMapContainer = new google.maps.Map(document.getElementById('mapDiv')); // create new instance of google map inside my <div> container id="mapDiv"
  placesAPI = new google.maps.places.PlacesService(theMapContainer/*attrContainer*/); // create new object of google Places API

// this is here because it is a parameter for google.maps.places.PlacesService.findPlaceFromQuery()
// this specifies the data that I would like from the API
// i can put any number of items in the 'fields' property that are listed in the docs
  let myRequest = {
    fields : ["name", 'formatted_address', "place_id"], // shopping cart of things I want from the api
    query : 'Heckscher',
    locationBias : 'IP_BIAS' // also takes latitude|longitude
  }

// this is here because it is a parameter to .findPlaceFromQuery(), however, it is optional
// this callback function will process the data that was requested
  let myCallback = /*async*/ (results, status) => {
    var placesStatus = google.maps.places.PlacesServiceStatus.OK;
    if (status === placesStatus && results) {
      console.log('mystatus', placesStatus, 'all good!');
      // this works
      for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
      }
    }
    else {
      console.log('i think there\'s an error');
    }
  }

// This is working!!
// this will send the data I asked for
// there is no reason to store this line as a variable because .findPlaceFromQuery() DOES NOT RETURN A VALUE, see docs
  /*myPlaceData = */placesAPI.findPlaceFromQuery(myRequest, myCallback);
  // only the results parameter from myCallback has my requsted data stored

} // close of initMap() function
