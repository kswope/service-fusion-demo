import firebase from "firebase"

const log = ( ...args ) => console.log( ...args )

var config = {
  apiKey: "AIzaSyBpynO_MvHDrAfaMNnEemccUFjTZBNgga8",
  authDomain: "service-fusion-demo-62722.firebaseapp.com",
  databaseURL: "https://service-fusion-demo-62722.firebaseio.com",
  projectId: "service-fusion-demo-62722",
  storageBucket: "",
  messagingSenderId: "188086927425"
};
firebase.initializeApp( config );


// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   log(errorCode, errorMessage)
//   // ...
// });

const personsRef = firebase.database().ref("persons/");

// personsRef.push( {id: 1, name:"kevin"} );
// personsRef.push( {id: 2, name:"laurie"} );


let uref = firebase.database().ref("persons/-KoaDxnfXH3ovUqLuGnE")
// ref.on( "value", ( x ) => log( x.val() ) )
//
uref.set( { name: "Kevin" } ).then( () => log( "done" ) )

var ref = firebase.database().ref("persons");
ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

// var ref1 = firebase.database().ref("persons/1");
//
// ref1.update ({
//    "name": "Kevin"
// });
//





