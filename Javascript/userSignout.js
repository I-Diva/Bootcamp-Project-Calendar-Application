$(document).ready(function() {

  //alert("Success!")

  var signOut = function() {
    console.log('Hello');
    firebase.auth().signOut().then(function() {
      console.log('Signed Out')
      linkTo('login.html');

    }, function(error) {
      console.log('Sign Out Error', error);
    });
  }
})
