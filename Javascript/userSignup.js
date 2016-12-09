//assign element ids to object variables
var signupButton = document.getElementById('register');
var username = document.getElementById('fullName');
var password = document.getElementById('password');
var email = document.getElementById('email');
var verify = document.getElementById('confirm');
signupButton.addEventListener('click', signup);

function signup(event) {
  event.preventDefault();
  var postData = {
    register: signupButton.value,
    fullName: username.value,
    password: password.value,
    confirm: verify.value,
    email: email.value,
  };
  // firebase user registration authentication
  var database = firebase.database();
  console.log(postData.password + " " + postData.confirm);
  if (postData.password != postData.confirm) {
    alert('The password is invalid')
  } else {
    firebase.auth().createUserWithEmailAndPassword(postData.email, postData.password)
      .then(function(user) {
        database.ref('/users/' + user.uid).set(postData);
        linkTo('public/login.html');

      })
      .catch(function(err) {
        alert('user already registered');
        linkTo('public/login.html');
      })
  };
}
