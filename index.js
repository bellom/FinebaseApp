var bigOne  = document.getElementById("bigOne");

var dbRef = firebase.database().ref().child('text');

dbRef.on('value', snap => bigOne.innerText = snap.val());
