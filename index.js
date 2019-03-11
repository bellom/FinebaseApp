var text = document.getElementById("text");
var submitBtn = document.getElementById("submitBtn");

function submitClick(){
    let firebaseRef = firebase.database().ref();
    firebaseRef.child("Text").set("some names");
}