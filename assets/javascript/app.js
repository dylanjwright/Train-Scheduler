  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsqlMRVLId6ax3-qRWwq3ldNZ0ozUdQ4Y",
    authDomain: "firsthomework-2959d.firebaseapp.com",
    databaseURL: "https://firsthomework-2959d.firebaseio.com",
    projectId: "firsthomework-2959d",
    storageBucket: "",
    messagingSenderId: "876038111131"
  };

  firebase.initializeApp(config);

  var db = firebase.database();

  //Submit input data to firebase on click
  $("#submitBtn").on("click", function(){

      var trainName = $("#train-id").val().trim();
      var destination = $("#destination-id").val().trim();
      var first = $("#first-id").val().trim();
      var frequency = $("#frequency-id").val().trim();

      var newTrain = {
          name: trainName,
          destination: destination,
          first: first,
          frequency: frequency
      };

      db.ref().push(newTrain);

      $("#train-id").val("");
      $("#destination-id").val("");
      $("#first-id").val("");
      $("#frequency-id").val("");

    return false;

  })

