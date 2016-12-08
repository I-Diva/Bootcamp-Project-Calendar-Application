// declare variable for your date array
var array = [];

function init() {
  getId('logout').style.color = 'white';
  greet();
}
// to be used later
function greet() {
  getId('greet').style.color = 'white';
}
window.addEventListener('load', init);

// create a function for looping through a selected number of years
function getYears() {

  $('#month').on('change', function() {

    year = $("#calendar").fullCalendar('getDate').format('YYYY');
    var m = moment([this.value, 0, 1]).format('YYYY-MM-DD');
    console.log(m)
    $('#calendar').fullCalendar('gotoDate', m);
  });

}
// use jquery to access your option tags for dropdown list of years
$(document).ready(function() {
  console.log("success")
  for (var i = 1990; i <= 2050; i++) {
    var option = $('<option>""</option>').text(i)
    $('select').append(option)
  }
})
