
var inputField;

function initMap() {

  inputField = document.getElementById('myInput');
  var autocompleteService = new google.maps.places.AutocompleteService(); // /*inputField<HTMLInputElement> [, opts<AutocompleteOptions>]*/

  // var myRequest = google.maps.places.AutocompletionRequest;
  // // console.log(inputField.value);
  // myRequest.input = inputField.value || "";
  // myRequest.radius = 5000;
  // myRequest.componentRestrictions = ['us', 'br', 'au'];

  var myRequest = {
    input : inputField.value,
    radius : 5000,
    componentRestrictions : {
      country : ['us', 'br', 'au']
    },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
  }

  var hisPredictions = google.maps.places.AutocompletePrediction;
  var serviceStatus = google.maps.places.PlacesServiceStatus;

  var myCallback = (predictions, status) => {
    if (status === serviceStatus.OK && predictions) {
      console.log('Status:', status);
      for (let i = 0; i < predictions.length; i++) {
        console.log(predictions[i]);
      }
    }
    else { console.log('something\'s is not right'); }
  }

  if (inputField.value != "") {
    autocompleteService.getPlacePredictions(myRequest, myCallback);
  }
  //var options = new google.maps.places.AutocompleteOptions();

  //var restrictions = new google.maps.places.ComponentRestrictions();
  //restrictions.country = ['us', 'br', 'au', 'jp'];




  // var prediction = new google.maps.places.AutocompletePrediction();
  // let myCallback = (prediction, status) => {
  //   var placesStatus = new google.maps.places.PlacesServiceStatus();
  //   if (status === placesStatus.OK && prediction) {
  //     console.log('Status:', status);
  //     for (let i = 0; i < prediction.length; i++) {
  //       console.log(prediction.length);
  //     }
  //   }
  //   else {
  //     console.log('something\'s not right...');
  //   }
  // }

  // autocompleteService.getPlacePredictions(myRequest, myCallback);

}
