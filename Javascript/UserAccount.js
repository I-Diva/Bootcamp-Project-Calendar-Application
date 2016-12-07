var button = document.getElementById('signIn');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signOut = document.getElementById('logout');

button.addEventListener('click', signIn, false);

function signIn(event) {
  'use strict';
  console.log('clicked');
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function(user) {
      console.log(user);
      linkTo('calendar.html');
    })
    .catch(function(err) {
      alert('Invalid username or password');
    });
}

function signOut(user) {
  firebase.auth().signOut(logout.value)
    .then(function(user) {
      console.log(user)
      linkTo('login.html');
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
}
button.addEventListener('click', signOut, false);
