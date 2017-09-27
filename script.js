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
