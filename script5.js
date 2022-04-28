
// the purpose of this script is to test the google Places Autocomplete service API

// var googleAutocompleteService;

// the library scripts are only within the scope of the initMap() function
// any properties or methods of the google api must be written within this function
function initMap() {

  var googleAutocompleteService = new google.maps.places.AutocompleteService(); // creates new instance of google palces autocomplete service, takes no parameters, see docs https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service

/* autocomplete service has two main methods
.getPlacePredictions() and .getQueryPredictions()

.getPlacePredictions is used to autocomplete for known placesStatus
.getQueryPredictions is used to autocomplete for a search query that is not just a known place, for example typing 'pizza' will find various places that match the keyword
*/

// .getPlacePredictions(request[, callback]) // callback param is optional
// request: is type AutocompletionRequest, see docs: https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
// callback:  function(Array<AutocompletePrediction> optional, PlacesServiceStatus): void /optional
// Return Value:  Promise<AutocompleteResponse>


}
