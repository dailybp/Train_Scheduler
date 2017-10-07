var config = {
    apiKey: "AIzaSyAOACd_E7xnXosL8_PQhG77viHkvrYVL-I",
    authDomain: "train-scheduler-458cb.firebaseapp.com",
    databaseURL: "https://train-scheduler-458cb.firebaseio.com",
    projectId: "train-scheduler-458cb",
    storageBucket: "",
    messagingSenderId: "982589023612"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();
  console.log(dataRef);

  $("#submit-btn").on('click', function(event){
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var trainDestination = $("#train-destination").val().trim();
    var firstTrainTime = moment($("#first-train-time").val().trim(), 'HH:mm').format('HH:mm');
    var trainFrequency = $("#frequency").val().trim();

    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: firstTrainTime,
      frequency: trainFrequency,
    };
    console.log(newTrain);

    dataRef.push(newTrain);
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);
    alert("Your Train Has Been Added!");

    $("#train-name").val("");
    $("#train-destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");
  });

  dataRef.ref().on("child_added", function(childSnapshot, prevChildKey){
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
