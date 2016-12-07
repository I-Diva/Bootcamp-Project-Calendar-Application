$(document).ready(function() {
  // var signOut = document.getElementById
  // ('logout');

  alert("hello world")

  var signOut = function() {
      console.log('Hello');
      firebase.auth().signOut().then(function() {
        console.log('Signed Out')
        linkTo('login.html');

      }, function(error) {
        console.log('Sign Out Error', error);
      });
    }
    // signOut.addEventListener('click', signOut);
})

/*firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});*/
