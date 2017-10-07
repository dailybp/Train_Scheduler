var config = {
    apiKey: "AIzaSyCQDRxzlZsIi3UDdLOwqntoSyQozNzhcLo",
    authDomain: "train-scheduler-a0b40.firebaseapp.com",
    databaseURL: "https://train-scheduler-a0b40.firebaseio.com",
    projectId: "train-scheduler-a0b40",
    storageBucket: "train-scheduler-a0b40.appspot.com",
    messagingSenderId: "1099086401322"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();
  console.log(dataRef);

  $("#submit-btn").on("click", function(event){
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var trainDestination = $("#train-destination").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var trainFrequency = $("#frequency").val().trim();

    var newTrain = {
      name: trainName,
      destination: trainDestination;
      time: firstTrainTime;
      frequency: trainFrequency;
    };

    dataRef.push(newTrain);
    alert("Your Train Has Been Added!");

    $("#train-name").val("");
    $("#train-destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");
  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);

  });
