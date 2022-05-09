
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-Hb8pqBeSwIKVdIb72_QdfxaaCryqb5Q",
    authDomain: "adv-c93-letschat-web-app---i.firebaseapp.com",
    projectId: "adv-c93-letschat-web-app---i",
    storageBucket: "adv-c93-letschat-web-app---i.appspot.com",
    messagingSenderId: "234605639108",
    appId: "1:234605639108:web:3c3c70c2a2de455ab72091"
  };
  
  // Initialize Firebase

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();