// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAo4BQgu6xfFkfH-w3DM7Kct2SoBbaMl0Y",
    authDomain: "kwitter2-34ae7.firebaseapp.com",
    databaseURL: "https://kwitter2-34ae7-default-rtdb.firebaseio.com",
    projectId: "kwitter2-34ae7",
    storageBucket: "kwitter2-34ae7.appspot.com",
    messagingSenderId: "50412229194",
    appId: "1:50412229194:web:496fc20a4b08639ad80cb3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message : msg,
     like:0    
 });
 document.getElementById("msg").value="";
     }