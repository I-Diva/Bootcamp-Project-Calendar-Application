var signupButton = document.getElementById('register');
var username = document.getElementById('fullName');
var password = document.getElementById('password');
var email = document.getElementById('email');
var verify = document.getElementById('confirm');
signupButton.addEventListener('click', signup);

function signup(event) {
  'use strict';
  event.preventDefault();
  var postData = {
    register: register.value,
    fullName: fullName.value,
    password: password.value,
    confirm: confirm.value,
    email: email.value,
  };

  var database = firebase.database();
  console.log(postData);
  firebase.auth().createUserWithEmailAndPassword(postData.email, postData.password)
    .then(function(user) {
      //database.ref('/users/' + user.uid).set(postData);
      linkTo('login.html');
    })
    .catch(function(err) {
      if (err.code === 'auth/weak-password') {
        alert('The password is too week')
      } else {
        alert(err.message);
      }
      console.log(err);
    });
}
