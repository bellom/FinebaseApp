// ***********LESSON 1*****************
// var bigOne  = document.getElementById('bigOne');

// var dbRef = firebase.database().ref().child('text');

// dbRef.on('value', snap => bigOne.innerText = snap.val());



// ***********LESSON 2*****************


window.onload = function (){
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAislv6qHJvJXa9Hc90kztqkEC1zgo-k4o",
    authDomain: "simpleblogwithfirebase-d94e0.firebaseapp.com",
    databaseURL: "https://simpleblogwithfirebase-d94e0.firebaseio.com",
    projectId: "simpleblogwithfirebase-d94e0",
    storageBucket: "simpleblogwithfirebase-d94e0.appspot.com",
    messagingSenderId: "130353693937"
    };
    firebase.initializeApp(config);

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click', e => {
        //Get username and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add signup event
    btnSignUp.addEventListener('click', e => {
        //Get username and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });

    //Add logout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        }else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });

};


