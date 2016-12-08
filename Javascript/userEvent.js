var array = [];
var started = false;

function init() {
  getId('logout').style.color = 'white';
  greet();
}

function greet() {
  getId('greet').style.color = 'white';
  getId('greet').innerHTML = 'Welcome  ' + localStorage.getItem('currentUser');
}

window.addEventListener('load', init);

function getYears() {

  $('#month').on('change', function() {

    year = $("#calendar").fullCalendar('getDate').format('YYYY');
    var m = moment([this.value, 0, 1]).format('YYYY-MM-DD');
    console.log(m)
    $('#calendar').fullCalendar('gotoDate', m);
  });

}

$(document).ready(function() {
  console.log("success")
  for (var i = 2016; i <= 2050; i++) {
    var option = $('<option>""</option>').text(i)
    $('select').append(option)
  }
})
