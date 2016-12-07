var array = [];
var started = false;
var myUserRef;

function init() {
  getId('logout').style.color = 'white';
  greet();
  firebase.auth().signOut(postData.logout);
  loadItems();
}

function greet() {
  getId('greet').style.color = 'white';
  getId('greet').innerHTML = 'Welcome  ' + localStorage.getItem('currentUser');
}

function loadItems() {
  myUserRef.on("value", function(snapshot) {
    if (!started) {
      var message = snapshot.val();
      loopThroughItems(message.event); //(message.event)
    }
    started = true;
  });
}

function getYears(value) {
  try {
    document.getElementById('year').innerHTML = value;
    for (var i = 1900; i <= value; i++) {
      var years = value;
      return years;
    }
  }
}
return (getYears(2100));

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
  array.push({ title: title, start: new Date(userDate.getFullYear(), userDate.getMonth(), userDate.getDate() + 1), backgroundColor: backgroundColor, borderColor: borderColor });
  ref.update({ 'event': array });
}

function reSaveEvent(title, date) {
  var userDate = new Date(date);
  for (var index = 0; index < array.length; index++) {
    if (array[index].title === title) {
      array[index].start = userDate;
    }
  }
  ref.update({ 'event': array });
}

function addEvent(title, start, backGround, border) {
  this.title = title;
  this.start = start;
  this.backgroundColor = backGround;
  this.borderColor = border;

}

window.addEventListener('load', init, false);
