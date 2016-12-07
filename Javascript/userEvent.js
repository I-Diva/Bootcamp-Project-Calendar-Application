var array = [];
var started = false;
var myUserRef;

function init() {
  getId('logout').style.color = 'white';
  greet();
}

function greet() {
  getId('greet').style.color = 'white';
  getId('greet').innerHTML = 'Welcome  ' + localStorage.getItem('currentUser');
}

function getYears() {

  $('#month').on('change', function() {

    year = $("#calendar").fullCalendar('getDate').format('YYYY');
    var m = moment([this.value, 0, 1]).format('YYYY-MM-DD');
    console.log(m)
    $('#calendar').fullCalendar('gotoDate', m);
  });

}

function loopThroughItems(items) {
  try {
    document.getElementById('rem').innerHTML = items.length;
    for (var i = 0; i < items.length; i++) {
      array.push(new addEvent(items[i].title, items[i].start, items[i].backgroundColor, items[i].borderColor));
      $('#calendar').fullCalendar('addEvent', new addEvent(items[i].title, items[i].start, items[i].backgroundColor, items[i].borderColor));
      $('#calendar').fullCalendar('renderEvent', new addEvent(items[i].title, items[i].start, items[i].backgroundColor, items[i].borderColor), true);
    }
  } catch (err) {
    console.log('initial load');
  }
}


function saveEvent(title, date, alldate, backgroundColor, borderColor) {
  var userDate = new Date(date._d);
  array.push({
    title: title,
    start: new Date(userDate.getFullYear(), userDate.getMonth(), userDate.getDate() + 1),
    backgroundColor: backgroundColor,
    borderColor: borderColor
  });
  ref.update({
    'event': array
  });
}

function reSaveEvent(title, date) {
  var userDate = new Date(date);
  for (var index = 0; index < array.length; index++) {
    if (array[index].title === title) {
      array[index].start = userDate;
    }
  }
  ref.update({
    'event': array
  });
}

function addEvent(title, start, backGround, border) {
  this.title = title;
  this.start = start;
  this.backgroundColor = backGround;
  this.borderColor = border;

}

window.addEventListener('load', init, false);

$(document).ready(function() {
  console.log("ready boss")
  for (let i = 2016; i <= 2050; i++) {
    var option = $('<option></option>').text(i)
    $('select').append(option)
  }
})
