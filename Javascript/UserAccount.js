var button = document.getElementById('signIn');
var email = document.getElementById('email');
var password = document.getElementById('password');
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

  console.log('Signed Out')

}
